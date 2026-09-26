import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume1, Volume2, VolumeX, X } from 'lucide-react'

// Easter-egg background layer: the backrooms still + a floating horizontal
// volume mixer for the accompanying track. Sits behind every section — the
// translucent/blurred cards elsewhere on the site let it bleed through.
export default function BackroomsPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.18)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  // Try to autoplay on mount. Most browsers block audio until the user has
  // interacted with the page at least once, so if it's rejected we just
  // start on the first click/keypress/touch instead.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        const start = () => {
          audio.play().then(() => setPlaying(true)).catch(() => {})
          window.removeEventListener('click', start)
          window.removeEventListener('keydown', start)
          window.removeEventListener('touchstart', start)
        }
        window.addEventListener('click', start)
        window.addEventListener('keydown', start)
        window.addEventListener('touchstart', start)
        return () => {
          window.removeEventListener('click', start)
          window.removeEventListener('keydown', start)
          window.removeEventListener('touchstart', start)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const VolIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2

  return (
    <>
      {/* background layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src="/backrooms.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.38] grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-ink-950/45" />
        <div className="absolute inset-0 bg-grid-fade" />
      </div>

      <audio ref={audioRef} src="/backr00ms.mp3" loop preload="none" />

      {/* collapsed launcher — sits on the right edge, closed by default */}
      <button
        onClick={() => setOpen(true)}
        aria-label="open player"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        className={`fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 bg-ink-900/80 text-bone-100 shadow-2xl shadow-black/50 backdrop-blur transition-all duration-[400ms] hover:border-accent-400 hover:text-accent-400 ${
          open ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>

      {/* mixer — flies out from the launcher's spot when opened */}
      <div
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        className={`fixed bottom-4 right-4 z-40 w-[min(320px,88vw)] origin-bottom-right rounded-lg border border-ink-700 bg-ink-900/80 px-4 py-3 font-mono shadow-2xl shadow-black/50 backdrop-blur transition-all duration-500 ${
          open
            ? 'translate-x-0 scale-100 opacity-100'
            : 'translate-x-10 scale-50 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={playing ? 'pause' : 'play'}
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-ink-600 text-bone-100 transition-colors hover:border-accent-400 hover:text-accent-400"
          >
            {playing ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-bone-100">BACKR00MS</p>
            <p className="text-[10px] text-bone-500">{playing ? 'playing · loop' : 'paused'}</p>
          </div>

          <VolIcon size={14} className="flex-none text-bone-500" />

          <button
            onClick={() => setOpen(false)}
            aria-label="close player"
            className="flex-none text-bone-500 transition-colors hover:text-bone-100"
          >
            <X size={14} />
          </button>
        </div>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="volume"
          className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-ink-700 accent-accent-400"
        />
      </div>
    </>
  )
}
