<template>
    <footer>
        <div>
            <p>© 2025 Reviver. All rights reserved.</p>
            <div class="socials">
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">YouTube</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="css">
    footer {
        background: var(--bg-color);
        color: var(--text-muted);
        padding: 2rem 4rem;
        margin-top: 4rem;
        font-size: 0.85rem;
        border-top: 1px solid #333;
    }

    footer div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .socials a {
        color: var(--text-muted);
        margin-left: 1rem;
        text-decoration: none;
        transition: color 0.3s;
    }

    .socials a:hover {
        color: var(--text-color);
    }
</style>
