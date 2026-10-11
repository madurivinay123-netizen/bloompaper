import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, 
  Sparkles, Sprout, Download, ShieldCheck, CheckCircle2, Film
} from 'lucide-react';
import { asset } from '../utils/assetHelper';

const scenesData = [
  {
    id: 1,
    title: "Floating Wedding Invitation",
    subtitle: "A luxury Indian wedding invitation floating gracefully with delicate flower petals.",
    durationSeconds: 5,
    startSeconds: 0,
    endSeconds: 5,
    image: asset('/video/scene1.jpg'),
    narrative: "A luxurious wedding invitation card floats in warm cream ambiance. Decorated with Indian wedding motifs and gold borders, it opens smoothly revealing the celebration details.",
    badge: "00:00 - 00:05 • Scene 1",
    tagline: "ELEGANT 3D FLOATING INVITATION"
  },
  {
    id: 2,
    title: "Invitation Moves Aside & Paper Emerges",
    subtitle: "The information sheet slides aside as a small plantable seed paper emerges forward.",
    durationSeconds: 5,
    startSeconds: 5,
    endSeconds: 10,
    image: asset('/video/scene2.jpg'),
    narrative: "The invitation information moves smoothly aside. From inside, a separate, thin rectangular piece of plantable seed paper emerges gracefully toward the camera.",
    badge: "00:05 - 00:10 • Scene 2",
    tagline: "PLANTABLE SEED PAPER REVEAL"
  },
  {
    id: 3,
    title: "Close-Up of Personalized Seed Paper",
    subtitle: "Detailed macro view: 'Aarav & Diya', couple photo, gold heart, and embedded seeds.",
    durationSeconds: 5,
    startSeconds: 10,
    endSeconds: 15,
    image: asset('/video/scene3.jpg'),
    narrative: "Visible embedded non-GMO flower seeds integrated into cotton rag fibers. Personalized with a delicate gold heart, couple's names, and mini photograph.",
    badge: "00:10 - 00:15 • Scene 3",
    tagline: "EMBEDDED LIVING SEEDS MACRO"
  },
  {
    id: 4,
    title: "Planting the Entire Paper Whole",
    subtitle: "Planted flat on rich soil in a terracotta pot and gently watered with realistic droplets.",
    durationSeconds: 5,
    startSeconds: 15,
    endSeconds: 20,
    image: asset('/video/scene4_planting.jpg'),
    narrative: "The entire seed paper is planted whole—never torn or folded. It rests on dark soil, covered lightly, and watered gently using a vintage watering can.",
    badge: "00:15 - 00:20 • Scene 4",
    tagline: "PLANT WHOLE • WATER WITH LOVE"
  },
  {
    id: 5,
    title: "Scientific Germination Time-Lapse",
    subtitle: "Water soaks in, roots branch downward into the soil cutaway, and green shoots rise.",
    durationSeconds: 9,
    startSeconds: 20,
    endSeconds: 29,
    image: asset('/video/scene5.jpg'),
    narrative: "Scientifically accurate botanical time-lapse: roots branch downward underground while a vigorous green sprout emerges with fresh cotyledons and leaves.",
    badge: "00:20 - 00:29 • Scene 5",
    tagline: "ROOTS & SPROUT TIME-LAPSE"
  },
  {
    id: 6,
    title: "Emotional Product Finale",
    subtitle: "A thriving living plant in sunlit window with original wedding invitation preserved.",
    durationSeconds: 6,
    startSeconds: 29,
    endSeconds: 35,
    image: asset('/video/scene6.jpg'),
    narrative: "A healthy plant grows near the sunlit window alongside the original wedding invitation. 'One Invitation. One Memory. One New Life. Don't Throw Away the Invitation. Plant It.'",
    badge: "00:29 - 00:35 • Scene 6",
    tagline: "ONE INVITATION. ONE MEMORY. ONE NEW LIFE."
  }
];

const TOTAL_VIDEO_DURATION = 35; // seconds

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const audioIntervalRef = useRef(null);
  const animFrameRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const imagesRef = useRef([]);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const particlesRef = useRef([]);

  // Preload Images
  useEffect(() => {
    scenesData.forEach((scene, index) => {
      const img = new Image();
      img.src = scene.image;
      imagesRef.current[index] = img;
    });

    // Initialize floating flower petals & leaves particles
    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * 1280,
        y: Math.random() * 720,
        size: Math.random() * 14 + 8,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.6 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        type: Math.random() > 0.4 ? 'petal' : 'leaf',
        color: Math.random() > 0.5 ? 'rgba(235, 175, 160, 0.7)' : 'rgba(125, 160, 120, 0.65)'
      });
    }
    particlesRef.current = particles;
  }, []);

  // Web Audio Synthesizer (Gentle emotional instrumental piano & ambient nature)
  const playSoundNote = useCallback((freq, gainLevel = 0.08, type = 'sine', duration = 2.5) => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainLevel, ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context might require user gesture
    }
  }, [isMuted]);

  // Ambient chords sequence for the 6 scenes
  useEffect(() => {
    if (isPlaying && !isMuted) {
      const chords = [
        [261.63, 329.63, 392.00, 523.25], // C Major
        [220.00, 261.63, 329.63, 440.00], // A Minor
        [196.00, 246.94, 293.66, 392.00], // G Major
        [174.61, 220.00, 261.63, 349.23], // F Major
        [246.94, 311.13, 369.99, 493.88], // B Minor (Growth tension)
        [261.63, 329.63, 392.00, 659.25]  // C Major High (Resolution)
      ];

      audioIntervalRef.current = setInterval(() => {
        const chordIndex = Math.min(Math.floor((currentTime / TOTAL_VIDEO_DURATION) * chords.length), chords.length - 1);
        const currentChord = chords[chordIndex];
        currentChord.forEach((freq, idx) => {
          setTimeout(() => {
            playSoundNote(freq, 0.05, 'sine', 3.0);
          }, idx * 180);
        });
      }, 2400);
    } else {
      clearInterval(audioIntervalRef.current);
    }
    return () => clearInterval(audioIntervalRef.current);
  }, [isPlaying, isMuted, currentTime, playSoundNote]);

  // Main Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localCurrentTime = currentTime;

    const render = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      if (isPlaying) {
        localCurrentTime += delta * playbackSpeed;
        if (localCurrentTime >= TOTAL_VIDEO_DURATION) {
          localCurrentTime = TOTAL_VIDEO_DURATION;
          setIsPlaying(false);
        }
        setCurrentTime(localCurrentTime);

        // Find active scene
        const idx = scenesData.findIndex(s => localCurrentTime >= s.startSeconds && localCurrentTime < s.endSeconds);
        const activeIdx = idx !== -1 ? idx : scenesData.length - 1;
        setActiveSceneIndex(activeIdx);
      }

      // Draw background
      ctx.fillStyle = '#1C1917';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const activeScene = scenesData[activeSceneIndex];
      const sceneProgress = Math.max(0, Math.min(1, (localCurrentTime - activeScene.startSeconds) / activeScene.durationSeconds));

      // Draw active scene image with cinematic Ken Burns camera movement
      const img = imagesRef.current[activeSceneIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.save();
        
        // Gentle Ken Burns zoom & pan
        const zoom = 1.0 + sceneProgress * 0.06;
        const panX = (sceneProgress - 0.5) * 15;
        const panY = (sceneProgress - 0.5) * 8;

        ctx.translate(canvas.width / 2 + panX, canvas.height / 2 + panY);
        ctx.scale(zoom, zoom);
        ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        ctx.restore();
      }

      // Cinematic Vignette Overlay
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.35,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.72
      );
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(15,12,10,0.55)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render Floating Flower Petals and Green Leaves particles
      particlesRef.current.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.02) * 0.3;
        p.rotation += p.rotSpeed;

        if (p.y > canvas.height + 20) p.y = -20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.x < -20) p.x = canvas.width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        ctx.beginPath();
        if (p.type === 'petal') {
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        } else {
          // Leaf shape
          ctx.moveTo(-p.size, 0);
          ctx.quadraticCurveTo(0, -p.size * 0.6, p.size, 0);
          ctx.quadraticCurveTo(0, p.size * 0.6, -p.size, 0);
        }
        ctx.fill();
        ctx.restore();
      });

      // Cinematic Title Banner / Lower Third
      ctx.save();
      const lowerThirdY = canvas.height - 110;

      // Dark glassmorphic bar for readability
      const barGrad = ctx.createLinearGradient(0, lowerThirdY, 0, canvas.height);
      barGrad.addColorStop(0, 'rgba(18, 14, 12, 0)');
      barGrad.addColorStop(0.3, 'rgba(18, 14, 12, 0.78)');
      barGrad.addColorStop(1, 'rgba(18, 14, 12, 0.94)');
      ctx.fillStyle = barGrad;
      ctx.fillRect(0, lowerThirdY, canvas.width, canvas.height - lowerThirdY);

      // Scene Badge
      ctx.fillStyle = '#C85A32';
      ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`SCENE ${activeSceneIndex + 1} OF 6 • ${activeScene.tagline}`, 42, lowerThirdY + 36);

      // Scene Subtitle
      ctx.fillStyle = '#FAF7F2';
      ctx.font = '600 22px "Cormorant Garamond", serif';
      ctx.fillText(activeScene.title, 42, lowerThirdY + 66);

      // Scene Narrative text
      ctx.fillStyle = '#D5CCA6';
      ctx.font = '14px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(activeScene.subtitle, 42, lowerThirdY + 90);

      // Finale Tagline Overlay for Scene 6
      if (activeSceneIndex === 5) {
        ctx.save();
        ctx.fillStyle = 'rgba(28, 22, 18, 0.85)';
        ctx.fillRect(canvas.width / 2 - 380, 50, 760, 110);
        ctx.strokeStyle = '#DECDB8';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(canvas.width / 2 - 380, 50, 760, 110);

        ctx.textAlign = 'center';
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 26px "Cormorant Garamond", serif';
        ctx.fillText('"One Invitation. One Memory. One New Life."', canvas.width / 2, 94);

        ctx.fillStyle = '#E2B870';
        ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
        ctx.letterSpacing = '2px';
        ctx.fillText("DON'T THROW AWAY THE INVITATION. PLANT IT.", canvas.width / 2, 130);
        ctx.restore();
      }

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, activeSceneIndex, playbackSpeed]);

  const handleTogglePlay = () => {
    if (currentTime >= TOTAL_VIDEO_DURATION) {
      setCurrentTime(0);
      setActiveSceneIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleJumpToScene = (index) => {
    const scene = scenesData[index];
    setCurrentTime(scene.startSeconds);
    setActiveSceneIndex(index);
    setIsPlaying(true);
  };

  const handleSeek = (posPercent) => {
    const targetSeconds = (posPercent / 100) * TOTAL_VIDEO_DURATION;
    setCurrentTime(targetSeconds);
    const idx = scenesData.findIndex(s => targetSeconds >= s.startSeconds && targetSeconds < s.endSeconds);
    setActiveSceneIndex(idx !== -1 ? idx : scenesData.length - 1);
  };

  // Video Export / Download Feature (Records Canvas to WebM file)
  const handleDownloadVideo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsRecording(true);
    setCurrentTime(0);
    setActiveSceneIndex(0);
    setIsPlaying(true);

    try {
      const stream = canvas.captureStream(30);
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      recordedChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Seed_Paper_Wedding_Invitation_3D_Promo.webm';
        a.click();
        URL.revokeObjectURL(url);
        setIsRecording(false);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;

      // Stop recording automatically at video end
      setTimeout(() => {
        if (recorder.state === 'recording') {
          recorder.stop();
        }
      }, (TOTAL_VIDEO_DURATION / playbackSpeed) * 1000 + 500);
    } catch (e) {
      alert("Video recording started. When playback finishes, your file will download automatically!");
    }
  };

  const activeScene = scenesData[activeSceneIndex];
  const progressPercent = (currentTime / TOTAL_VIDEO_DURATION) * 100;

  return (
    <section id="demo-video" className="demo-video-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-terracotta sub-badge">
            <Film size={15} />
            <span>Official 3D Animated Film • 16:9 Widescreen</span>
          </div>
          <h2 className="section-title">The Complete Seed Paper Journey</h2>
          <p className="section-subtitle">
            From luxury floating Indian wedding invitation to living blooming flowers. 
            Experience every scene of our cinematic 3D product demonstration.
          </p>
        </div>

        {/* Video Player Card Frame */}
        <div className="video-player-frame deckle-card">
          <div className="video-screen-wrapper">
            {/* HTML5 Canvas 16:9 Renderer */}
            <canvas 
              ref={canvasRef}
              width={1280}
              height={720}
              className="cinematic-video-canvas"
              onClick={handleTogglePlay}
            />

            {/* Quality & Resolution Watermark */}
            <div className="video-hd-pill">
              <span className="live-rec-dot"></span>
              <span>16:9 4K CINEMATIC • 35s PROMO</span>
            </div>

            {/* Recording notification badge if exporting */}
            {isRecording && (
              <div className="recording-alert-badge">
                <span className="pulse-red"></span> Recording &amp; Rendering Video File...
              </div>
            )}

            {/* Center Big Play Button Overlay when paused */}
            {!isPlaying && (
              <div className="video-center-overlay" onClick={handleTogglePlay}>
                <button className="center-play-button" aria-label="Play 3D Promo Video">
                  <Play size={38} fill="#FFFFFF" />
                </button>
                <span className="center-play-label">Play 3D Animated Commercial (35s)</span>
              </div>
            )}

            {/* Bottom Floating Control Bar */}
            <div className="custom-control-bar">
              {/* Progress Scrubber */}
              <div 
                className="progress-track"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = ((e.clientX - rect.left) / rect.width) * 100;
                  handleSeek(pos);
                }}
              >
                <div className="progress-fill" style={{ width: `${progressPercent}%` }}>
                  <div className="progress-scrubber-handle"></div>
                </div>
              </div>

              {/* Controls Toolbar */}
              <div className="control-elements-row">
                <div className="controls-left">
                  <button 
                    className="ctrl-btn play-ctrl"
                    onClick={handleTogglePlay}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
                  </button>

                  <button 
                    className="ctrl-btn"
                    onClick={() => {
                      setCurrentTime(0);
                      setActiveSceneIndex(0);
                      setIsPlaying(true);
                    }}
                    title="Replay from Scene 1"
                  >
                    <RotateCcw size={18} />
                  </button>

                  <button 
                    className="ctrl-btn"
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? "Unmute Audio Soundtrack" : "Mute Audio Soundtrack"}
                  >
                    {isMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
                  </button>

                  <span className="time-display">
                    00:{String(Math.floor(currentTime)).padStart(2, '0')} / 00:{TOTAL_VIDEO_DURATION}
                  </span>
                </div>

                <div className="controls-right">
                  {/* Download Video File */}
                  <button 
                    className="download-video-btn"
                    onClick={handleDownloadVideo}
                    title="Export / Download high-res animated video file"
                    disabled={isRecording}
                  >
                    <Download size={14} />
                    <span>{isRecording ? 'Rendering...' : 'Download Video'}</span>
                  </button>

                  {/* Playback speed */}
                  <button 
                    className="speed-toggle-btn"
                    onClick={() => setPlaybackSpeed(s => s === 1 ? 1.5 : s === 1.5 ? 2 : 1)}
                  >
                    {playbackSpeed}x
                  </button>

                  {/* Fullscreen */}
                  <button 
                    className="ctrl-btn"
                    onClick={() => {
                      const el = document.querySelector('.video-player-frame');
                      if (el) {
                        if (!document.fullscreenElement) {
                          el.requestFullscreen();
                          setIsFullscreen(true);
                        } else {
                          document.exitFullscreen();
                          setIsFullscreen(false);
                        }
                      }
                    }}
                    title="Toggle Fullscreen"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Interactive Scene Jump Cards */}
          <div className="video-chapter-drawer deckle-card">
            <div className="chapter-nav-header">
              <div className="drawer-title-group">
                <span className="drawer-section-label">Scene Navigation</span>
                <h4 className="drawer-title">Storyboard Scenes (Click to Jump Instantly)</h4>
              </div>
              <div className="drawer-current-badge">
                <span className="live-indicator-dot"></span>
                <span>{activeScene.badge}</span>
              </div>
            </div>

            <div className="scene-storyboard-grid">
              {scenesData.map((sc, idx) => (
                <div 
                  key={sc.id}
                  className={`storyboard-card ${activeSceneIndex === idx ? 'active' : ''}`}
                  onClick={() => handleJumpToScene(idx)}
                >
                  <div className="storyboard-thumbnail-wrap">
                    <img src={sc.image} alt={sc.title} className="thumb-img" />
                    <span className="scene-time-stamp">
                      00:{String(sc.startSeconds).padStart(2, '0')} - 00:{String(sc.endSeconds).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="storyboard-text">
                    <span className="scene-step-num">Scene {sc.id}</span>
                    <h5 className="scene-step-title">{sc.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Scene Detailed Narrative */}
            <div className="active-chapter-info">
              <div className="info-main">
                <div className="active-scene-title-badge">
                  <Sprout size={16} color="#4E6E54" />
                  <h4>Scene {activeSceneIndex + 1}: {activeScene.title}</h4>
                </div>
                <p>{activeScene.narrative}</p>
              </div>

              <div className="info-points">
                <div className="point-chip">
                  <CheckCircle2 size={14} className="point-icon" />
                  <span>3D Realistic Product Cinematography</span>
                </div>
                <div className="point-chip">
                  <CheckCircle2 size={14} className="point-icon" />
                  <span>Entire Paper Planted Whole (Never Torn)</span>
                </div>
                <div className="point-chip">
                  <CheckCircle2 size={14} className="point-icon" />
                  <span>Scientific Root &amp; Sprout Germination</span>
                </div>
                <div className="point-chip">
                  <CheckCircle2 size={14} className="point-icon" />
                  <span>Tagline: "One Invitation. One Memory. One New Life."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
