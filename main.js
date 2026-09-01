(function () {
    'use strict';

    /* ── 1. 入场动画 ── */
    const fadeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('visible');
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el));

    /* ── 2. 视差网格背景 ── */
    let rafId = null;
    const bgGrid = document.querySelector('.bg-grid');
    document.addEventListener('mousemove', (e) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            const x = (e.clientX / innerWidth - 0.5) * 8;
            const y = (e.clientY / innerHeight - 0.5) * 8;
            bgGrid.style.transform = `translate(${x}px,${y}px)`;
            rafId = null;
        });
    });

    /* ── 3. 轮播：5秒自动切换，无按钮 ── */
    const slides = document.querySelectorAll('.carousel-slide');
    let current = 0;

    if (slides.length > 1) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

    /* ── 4. 第三屏可见时隐藏导航下载按钮 ── */
    const downloadSection = document.getElementById('download');
    const navDlBtn = document.getElementById('navDlBtn');

    if (downloadSection && navDlBtn) {
        const dlObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    navDlBtn.classList.toggle('hide', e.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );
        dlObserver.observe(downloadSection);
    }
})();