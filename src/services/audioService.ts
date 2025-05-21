import { Howl } from 'howler';

export class AudioService {
  private static sounds: { [key: string]: Howl } = {};
  private static isMuted: boolean = false;

  static init() {
    // Load Arabic alphabet sounds
    const arabicSounds = [
      'alif', 'ba', 'ta', 'tha', 'jeem', 'ha', 'kha', 'dal', 'dhal', 'ra',
      'zay', 'seen', 'sheen', 'sad', 'dad', 'ta_emphatic', 'za_emphatic',
      'ayn', 'ghayn', 'fa', 'qaf', 'kaf', 'lam', 'meem', 'noon', 'waw',
      'ha_end', 'hamza', 'ya'
    ];

    // Load letter sounds
    arabicSounds.forEach(sound => {
      this.loadSound(sound, `/audio/${sound}.mp3`);
      // Load example word sounds if available
      this.loadSound(`${sound}_word`, `/audio/${sound}_word.mp3`);
    });

    // Load additional sounds for examples
    const exampleSounds = [
      'asad', 'baab', 'tamr', 'thalab', 'jamal', 'hoot', 'khubz', 'dubb',
      'dhib', 'rumman', 'zarafah', 'samak', 'shams', 'saqr', 'difdaa',
      'tair', 'dhaby', 'ayn_word', 'ghazal', 'feel', 'qamar', 'kitab',
      'laymun', 'mawz', 'naml', 'wardah', 'hilal', 'samaa', 'yad'
    ];

    exampleSounds.forEach(sound => {
      this.loadSound(sound, `/audio/${sound}.mp3`);
    });
  }

  static loadSound(id: string, url: string) {
    this.sounds[id] = new Howl({
      src: [url],
      html5: true,
      preload: true,
      onloaderror: (soundId, error) => {
        console.warn(`Error loading sound ${id}:`, error);
      }
    });
  }

  static play(id: string) {
    if (this.isMuted || !this.sounds[id]) return;
    
    // Stop any currently playing sounds
    this.stopAll();
    
    // Play the requested sound
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
    
    // Stop any currently playing sounds
    this.stopAll();
    
    const sound = new Howl({
      src: [url],
      html5: true,
      onloaderror: (soundId, error) => {
        console.warn(`Error loading sound from URL ${url}:`, error);
      }
    });
    
    sound.play();
  }
}