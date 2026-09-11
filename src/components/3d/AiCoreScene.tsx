'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function AiCoreScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // 1. Reduced Motion Check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsLowPerformance(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // 2. WebGL Availability Check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // 3. Three.js Scene Setup
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x3b82f6, 2.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x60a5fa, 3, 10);
    pointLight.position.set(-3, -2, 2);
    scene.add(pointLight);

    // 5. 3D Computational AI Core Objects Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer Translucent Wireframe Icosahedron Core
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner Metallic Geometric Octahedron Matrix Core
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbital Particle Ring
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = (i / particleCount) * Math.PI * 2;
      const radius = 2.4 + (Math.random() - 0.5) * 0.4;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      particlePositions[i * 3 + 2] = Math.sin(theta) * radius;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
    });

    const particleRing = new THREE.Points(particleGeo, particleMat);
    particleRing.rotation.x = Math.PI * 0.2;
    coreGroup.add(particleRing);

    // 6. Interaction Variables (Mouse & Touch Tilt)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth Mouse Tilt Interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Object Rotations
      outerMesh.rotation.x += 0.003;
      outerMesh.rotation.y += 0.005;

      innerMesh.rotation.x -= 0.006;
      innerMesh.rotation.y -= 0.008;

      particleRing.rotation.z += 0.004;

      coreGroup.rotation.y = mouseX * 0.5;
      coreGroup.rotation.x = mouseY * 0.5;

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
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Fallback for Reduced Motion or Missing WebGL
  if (isLowPerformance || !hasWebGL) {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 p-8 shadow-lg">
          <div className="h-48 w-48 rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-md flex items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 shadow-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] sm:h-[400px] lg:h-[480px] w-full cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D PriMAqy AI Computational Core"
    />
  );
}
