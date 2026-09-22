'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SpatialBackgroundEngineProps {
  variant?: 'hero' | 'problem' | 'system' | 'product' | 'cta';
}

export function SpatialBackgroundEngine({ variant = 'hero' }: SpatialBackgroundEngineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // 1. Reduced Motion & Device Check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsLowPerformance(true);
      return;
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const container = containerRef.current;
    if (!container) return;

    // 2. WebGL Support Test
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsLowPerformance(true);
        return;
      }
    } catch {
      setIsLowPerformance(true);
      return;
    }

    // 3. Three.js Scene Setup
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 4. Lighting Setup (Soft Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, variant === 'cta' ? 0.4 : 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, variant === 'cta' ? 1.5 : 1.2);
    keyLight.position.set(6, 8, 10);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x3b82f6, variant === 'cta' ? 2.0 : 0.8);
    rimLight.position.set(-8, -6, -5);
    scene.add(rimLight);

    // 5. Spatial Objects Group (Parallax Layers)
    const backgroundLayer = new THREE.Group();
    const midgroundLayer = new THREE.Group();
    const foregroundLayer = new THREE.Group();

    scene.add(backgroundLayer);
    scene.add(midgroundLayer);
    scene.add(foregroundLayer);

    // Material Presets
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: variant === 'cta' ? 0x262626 : 0xffffff,
      transmission: 0.85,
      opacity: variant === 'cta' ? 0.3 : 0.45,
      transparent: true,
      roughness: 0.15,
      metalness: 0.1,
      ior: 1.4,
      thickness: 0.5,
    });

    const softPanelMat = new THREE.MeshStandardMaterial({
      color: variant === 'cta' ? 0x171717 : 0xf5f5f5,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.7,
    });

    // Construct Architectural Spatial Forms based on variant & mobile state
    const itemCount = isMobile ? 2 : 4;

    for (let i = 0; i < itemCount; i++) {
      // Floating Architectural Glass Plane
      const planeGeo = new THREE.BoxGeometry(3.2 + i * 0.4, 1.8, 0.08);

      const planeMesh = new THREE.Mesh(planeGeo, glassMat);
      planeMesh.position.set(
        (i % 2 === 0 ? 1 : -1) * (3.5 + i * 0.5),
        (i - 1.5) * 2.0,
        -2 - i * 1.5
      );
      planeMesh.rotation.set(0.1, (i % 2 === 0 ? 0.15 : -0.15), 0.05);
      backgroundLayer.add(planeMesh);
    }

    // Midground Spatial Curved Ribbons / Torus Layers
    const torusGeo = new THREE.TorusGeometry(3.5, 0.04, 16, 64);
    const torusMesh = new THREE.Mesh(torusGeo, softPanelMat);
    torusMesh.rotation.x = Math.PI * 0.35;
    torusMesh.position.set(0, 0, -3);
    midgroundLayer.add(torusMesh);

    // 6. Interaction Variables (Mouse Parallax & Scroll)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.05;
      targetY = (y / rect.height) * 0.05;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.0005;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
    }

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth Interp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Parallax Shifts (Background 1-3%, Midground 2-4%, Foreground 3-5%)
      backgroundLayer.position.x = mouseX * 0.3;
      backgroundLayer.position.y = -mouseY * 0.3 + scrollY * 0.5;
      backgroundLayer.rotation.y = mouseX * 0.1;

      midgroundLayer.position.x = mouseX * 0.6;
      midgroundLayer.position.y = -mouseY * 0.6 - scrollY * 0.8;
      midgroundLayer.rotation.z = mouseX * 0.15 + scrollY * 0.2;

      foregroundLayer.position.x = mouseX * 1.0;
      foregroundLayer.position.y = -mouseY * 1.0;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      glassMat.dispose();
      softPanelMat.dispose();
      torusGeo.dispose();
      renderer.dispose();
    };
  }, [variant]);

  if (isLowPerformance) {
    return (
      <div className="pointer-events-none absolute inset-0 bg-spatial-hero opacity-80" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 h-full w-full max-w-full overflow-hidden select-none z-0"
      aria-hidden="true"
    />
  );
}
