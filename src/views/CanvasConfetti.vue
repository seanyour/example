<template>
    <div>
        <BackHome m="t-10px l-10px" />
        <div flex="~" justify="center">
            <div>
                <span>FireWork：</span>
                <a-input-number v-model:value="fireWorkTime" placeholder="Time" :min="1" @change="fireWork" />
            </div>

            <div m="l-20px">
                <span>Snow：</span>
                <el-input-number v-model:value="snowTime" placeholder="Time" :min="1" @change="snow" />
            </div>

            <el-button type="text" @click="salute">Salute</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import confetti from 'canvas-confetti';
    import { $ref } from 'vue/macros';
    import BackHome from 'components/BackHome.vue';

    const fireWorkTime = $ref(1);
    const snowTime = $ref(1);

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    function fireWork() {
        let duration = fireWorkTime * 1000;
        let animationEnd = Date.now() + duration;
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        let interval = setInterval(function () {
            let timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            let particleCount = 50 * (timeLeft / duration);

            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    }

    function snow() {
        const body = document.querySelector('body');
        body?.classList.add('bg-gray-200');
        let duration = 15 * 1000;
        let animationEnd = Date.now() + duration;
        let skew = 1;

        (function frame() {
            let timeLeft = animationEnd - Date.now();
            let ticks = Math.max(200, 500 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);

            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                origin: {
                    x: Math.random(),
                    // since particles fall down, skew start toward the top
                    y: Math.random() * skew - 0.2,
                },
                colors: ['#ffffff'],
                shapes: ['circle'],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4),
            });

            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        })();
    }

    function salute() {
        confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 },
        });
    }
</script>

<style lang="scss" scoped></style>
