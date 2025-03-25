import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
document.querySelectorAll('a[href]').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    if (e.srcElement.classList.contains('a-nav-burger'))
      document.querySelector('.menu-overlay').classList.remove('is-open');
    gsap.to(window, {
      duration: 0.2,
      ease: 'power1.inOut',
      scrollTo: `${e.srcElement.getAttribute('href')}`,
    });
  };
});
let tl = gsap.timeline({
  ease: 'power1.inOut',
});
tl.from('header', {
  y: -40,
  opacity: 0.5,
});
tl.from('header .header-logo', {
  y: -5,
  opacity: 0,
  duration: 0.15,
});
for (let i = 1; i < 4; i++) {
  tl.from(`header .nav-list .nav-item:nth-child(${i})`, {
    x: -5,
    y: -15,
    opacity: 0,
    duration: 0.15,
  });
}
for (let i = 1; i < 4; i++) {
  tl.from(
    `header .header-soc-media-list .header-soc-media-item:nth-child(${i})`,
    {
      x: -25,
      opacity: 0,
      duration: 0.1,
    }
  );
}
let tl2 = gsap.timeline({
  ease: 'power1.inOut',
});
tl2.from('.hero h1', {
  y: -115,
  opacity: 0,
  duration: 0.8,
});
tl2.from('.hero p', {
  x: -45,
  opacity: 0,
  duration: 0.35,
});
tl2.from('.hero .btn', {
  x: -45,
  opacity: 0,
  duration: 0.3,
});
let yachtsTL = gsap.timeline({
  scrollTrigger: '.yachts',
  start: 'top 80%',
  delay: 0.4,
  ease: 'power1.inOut',
});
yachtsTL.from('.yachts .yachts-title', {
  y: -65,
  opacity: 0,
  duration: 0.3,
});
for (let i = 1; i < 4; i++) {
  yachtsTL.from(`.yachts .yachts-list .yachts-item:nth-child(${i})`, {
    x: -25,
    opacity: 0,
    duration: 0.2,
  });
  yachtsTL.from(`.yachts .yachts-list .yachts-item:nth-child(${i}) li`, {
    x: -15,
    opacity: 0,
    duration: 0.15,
  });
}
yachtsTL.from(`.yachts .btn`, {
  y: -25,
  opacity: 0,
  duration: 0.2,
});
let advantagesTL = gsap.timeline({
  scrollTrigger: '.advantages',
  start: 'top 80%',
  delay: 0.5,
  ease: 'power1.inOut',
});
advantagesTL.from(`.advantages img`, {
  x: 25,
  opacity: 0,
  duration: 0.3,
});
for (let i = 1; i < 5; i++) {
  advantagesTL.from(
    `.advantages .advantages-list .advantages-item:nth-child(${i})`,
    {
      y: -25,
      opacity: 0,
      duration: 0.15,
    }
  );
  advantagesTL.from(
    `.advantages .advantages-list .advantages-item:nth-child(${i}) p`,
    {
      x: -15,
      opacity: 0,
      duration: 0.15,
    }
  );
}
let reviewsTL = gsap.timeline({
  scrollTrigger: '.reviews',
  start: 'top 80%',
  delay: 0.3,
  ease: 'power1.inOut',
});
reviewsTL.from('.reviews .rev-title', {
  y: -65,
  opacity: 0,
  duration: 0.5,
});
reviewsTL.from('.reviews .rev-text', {
  x: -65,
  opacity: 0,
  duration: 0.3,
});
for (let i = 1; i < 4; i++) {
  reviewsTL.from(`.reviews .rev-list .rev-item:nth-child(${i})`, {
    y: -25,
    opacity: 0,
    duration: 0.3,
  });
}
let footerTL = gsap.timeline({
  scrollTrigger: 'footer',
  start: 'top 60%',
  delay: 0.3,
  ease: 'power1.inOut',
});
footerTL.from('footer .logo-footer', {
  y: -5,
  opacity: 0,
  duration: 0.15,
});
for (let i = 1; i < 4; i++) {
  footerTL.from(`footer .footer-menu-item .footer-menu-link:nth-child(${i})`, {
    x: -5,
    y: -15,
    opacity: 0,
    duration: 0.15,
  });
}
for (let i = 1; i < 4; i++) {
  footerTL.from(
    `footer .footer-social-icons .footer-social-item:nth-child(${i})`,
    {
      x: -25,
      opacity: 0,
      duration: 0.1,
    }
  );
}
footerTL.from('footer .slogan', {
  y: -25,
  opacity: 0,
  duration: 0.25,
});
for (let i = 1; i < 3; i++) {
  footerTL.from(`footer .footer-company li:nth-child(${i})`, {
    y: -25,
    opacity: 0,
    duration: 0.2,
  });
}
document.onreadystatechange = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    70
  );
  camera.position.x = 15;
  camera.position.z = 40;
  const light = new THREE.AmbientLight('#fff', 2);
  const bottomLight = new THREE.AmbientLight('#fff', 2);
  bottomLight.position.y = -5;
  scene.add(light, bottomLight);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 4;
  controls.enableDamping = true;
  controls.dampingFactor = 0.01;
  controls.enableZoom = false;
  controls.enableRotate = true;
  controls.enablePan = false;
  const loader = new GLTFLoader();
  let yacht = null;
  let yacht2 = null;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.yachts3d',
        start: 'top 80%',
      },
    })
    .add(() => {
      loader.load(
        'models/yacht/scene.gltf',
        function (gltf) {
          yacht = gltf.scene;
          scene.add(yacht);
        },
        undefined,
        function (error) {
          document.querySelector('.yachts3d').remove();
          console.error(error);
        }
      );
      loader.load(
        'models/yacht-second/scene.gltf',
        function (gltf) {
          yacht2 = gltf.scene;
          yacht2.visible = false;
          scene.add(yacht2);
        },
        undefined,
        function (error) {
          document.querySelector('.yachts3d').remove();
          console.error(error);
        }
      );
    });
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  document
    .querySelector('.yachts3d .container')
    .insertBefore(
      renderer.domElement,
      document.querySelector('.yachts3d .yachts-choose')
    );
  document
    .querySelectorAll('.yachts3d .container .yachts-choose li')
    .forEach(item => {
      item.onclick = () => {
        document
          .querySelectorAll('.yachts3d .container .yachts-choose li')
          .forEach(it => it.classList.remove('active'));
        item.classList.add('active');
        if (item.classList.contains('second')) {
          yacht.visible = false;
          camera.position.set(0, 1, 1.5);
          yacht2.visible = true;
        } else if (item.classList.contains('first')) {
          yacht2.visible = false;
          camera.position.set(15, 0, 40);
          yacht.visible = true;
        }
      };
    });
  function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
};
