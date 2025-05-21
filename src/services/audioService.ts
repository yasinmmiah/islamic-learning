import { Howl } from 'howler';

export class AudioService {
  private static sounds: { [key: string]: Howl } = {};
  private static isMuted: boolean = false;

  static init() {
    // Load all sounds here
    this.loadSound('alif', '/audio/alif.mp3');
    this.loadSound('ba', '/audio/ba.mp3');
    // Add more sounds as needed
  }

  static loadSound(id: string, url: string) {
    this.sounds[id] = new Howl({
      src: [url],
      html5: true,
      preload: true
    });
  }

  static play(id: string) {
    if (this.isMuted || !this.sounds[id]) return;
    this.sounds[id].play();
  }

  static stop(id: string) {
    if (this.sounds[id]) {
      this.sounds[id].stop();
    }
  }

  static stopAll() {
    Object.values(this.sounds).forEach(sound => sound.stop());
  }

  static setMute(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopAll();
    }
  }

  static playFromUrl(url: string) {
    if (this.isMuted) return;
    
    const sound = new Howl({
      src: [url],
      html5: true
    });
    
    sound.play();
  }
}