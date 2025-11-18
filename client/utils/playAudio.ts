export default function playAudio(file: string) {
  let sound = new Audio(file)
  sound.play()
}
