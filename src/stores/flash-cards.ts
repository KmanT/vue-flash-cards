import { defineStore } from 'pinia'
import { flashCards as data } from '@/data/flash-cards.json'
import { computed, ref } from 'vue'
import { v4 as uuidV4 } from 'uuid'

type CardData = {
  id: string
  frontText: string
  backText: string
}

export type FlashCard = CardData & { answered: boolean | 'correct' | 'incorrect' }

function initialFlashCardState(cardData: CardData[] | FlashCard[]): FlashCard[] {
  return cardData.map((card) => ({ ...card, answered: false }))
}

// Fisher-Yates (Knuth) Shuffle
function shuffleCardOrder(flashCards: FlashCard[]): string[] {
  const ids = flashCards.map((card) => card.id)

  let currentIdx = ids.length

  while (currentIdx != 0) {
    let randomIdx = Math.floor(Math.random() * currentIdx)
    currentIdx--
    ;[ids[currentIdx], ids[randomIdx]] = [ids[randomIdx], ids[currentIdx]]
  }

  return ids
}

function getCardById(flashCards: FlashCard[], id: string): FlashCard | undefined {
  return flashCards.find((card) => card.id === id)
}

export const useFlashCardStore = defineStore('flash-cards', () => {
  // state
  const flashCards = ref([...initialFlashCardState(data)])
  const cardOrder = ref([...shuffleCardOrder(flashCards.value)])
  const currentIdx = ref(0)
  const correctCount = ref(0)
  const incorrectCount = ref(0)
  const isFront = ref(true)

  // getters
  const currentCard = computed(() => {
    const card = getCardById(flashCards.value, cardOrder.value[currentIdx.value])

    return !!card
      ? { ...card }
      : {
          id: 'UNDEF',
          answered: false,
          frontText: 'NO CARDS',
          backText: 'Could be an error',
        }
  })
  const totalAnswered = computed(() => correctCount.value + incorrectCount.value)
  const hasAnsweredAll = computed(() => totalAnswered.value === flashCards.value.length)

  //actions
  function flipCard() {
    isFront.value = !isFront.value
  }

  function increaseCorrect(id: string) {
    const card = getCardById(flashCards.value, id)

    if (!card || !!card.answered) {
      return
    }

    card.answered = 'correct'
    correctCount.value++
  }

  function increaseIncorrect(id: string) {
    const card = getCardById(flashCards.value, id)

    if (!card || !!card.answered) {
      return
    }

    card.answered = 'incorrect'
    incorrectCount.value++
  }

  function moveLeft() {
    if (currentIdx.value - 1 < 0) {
      currentIdx.value = flashCards.value.length - 1
    } else {
      currentIdx.value--
    }
  }

  function moveRight() {
    if (currentIdx.value + 1 >= flashCards.value.length) {
      currentIdx.value = 0
    } else {
      currentIdx.value++
    }
  }

  function resetCardsAndScore() {
    flashCards.value = initialFlashCardState(flashCards.value)
    cardOrder.value = shuffleCardOrder([...flashCards.value])
    currentIdx.value = 0
    correctCount.value = 0
    incorrectCount.value = 0
  }

  function addCard(frontText: string, backText: string) {
    const id = uuidV4()
    flashCards.value = [...flashCards.value, { id, frontText, backText, answered: false }]
  }

  function saveCardsToStorage() {
    const cardData = flashCards.value.map((card) => ({
      id: card.id,
      frontText: card.frontText,
      backText: card.backText,
    }))

    localStorage.setItem('flashCards', JSON.stringify(cardData))
  }

  function loadCardsFromStorage() {
    const savedData = localStorage.getItem('flashCards')
    if (savedData) {
      flashCards.value = JSON.parse(savedData)
    }
  }

  return {
    flashCards,
    currentIdx,
    currentCard,
    isFront,
    correctCount,
    incorrectCount,
    increaseCorrect,
    increaseIncorrect,
    moveLeft,
    moveRight,
    cardOrder,
    flipCard,
    hasAnsweredAll,
    resetCardsAndScore,
    addCard,
  }
})
