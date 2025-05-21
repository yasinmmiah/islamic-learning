import { Howl } from 'howler';

export class AudioService {
  private static sounds: { [key: string]: Howl } = {};
  private static isMuted: boolean = false;
  private static currentSound: Howl | null = null;

  static init() {
    // Initialize with empty sounds object
    this.sounds = {};
    console.log('Audio service initialized');
  }

  static async loadSound(id: string, url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.sounds[id] = new Howl({
          src: [url],
          html5: true,
          preload: true,
          onload: () => {
            console.log(`Sound ${id} loaded successfully`);
            resolve();
          },
          onloaderror: (_, error) => {
            console.error(`Error loading sound ${id}:`, error);
            reject(error);
          }
        });
      } catch (error) {
        console.error(`Error creating Howl instance for ${id}:`, error);
        reject(error);
      }
    });
  }

  static async play(id: string) {
    if (this.isMuted) {
      console.log('Audio is muted, not playing sound');
      return;
    }

    try {
      // Stop current sound if playing
      if (this.currentSound) {
        this.currentSound.stop();
      }

      // If sound isn't loaded yet, try to load it
      if (!this.sounds[id]) {
        const url = `/audio/${id}.mp3`;
        await this.loadSound(id, url);
      }

      if (this.sounds[id]) {
        this.currentSound = this.sounds[id];
        this.currentSound.play();
        console.log(`Playing sound: ${id}`);
      }
    } catch (error) {
      console.error(`Error playing sound ${id}:`, error);
    }
  }

  static async playFromUrl(url: string) {
    if (this.isMuted) {
      console.log('Audio is muted, not playing sound');
      return;
    }

    try {
      // Stop current sound if playing
      if (this.currentSound) {
        this.currentSound.stop();
      }

      const sound = new Howl({
        src: [url],
        html5: true
      });

      this.currentSound = sound;
      sound.play();
      console.log(`Playing sound from URL: ${url}`);
    } catch (error) {
      console.error(`Error playing sound from URL ${url}:`, error);
    }
  }

  static stop() {
    if (this.currentSound) {
      this.currentSound.stop();
      this.currentSound = null;
    }
  }

  static setMute(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.currentSound) {
      this.currentSound.stop();
    }
    console.log(`Audio ${muted ? 'muted' : 'unmuted'}`);
  }
}