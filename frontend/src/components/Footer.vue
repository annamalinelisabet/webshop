<template>
    <footer>
        <div class="social-links flex">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>            
        </div>
        <div class="flex copywright">
            <i class="fa-regular fa-copyright"></i> 
            <small>2022 LOGO</small>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
    footer {
        background: var(--secondary-color);
    }

    .social-links {
        width: 20%;
        margin: auto;
        padding-block: .8rem;
        font-size: 1.2rem;
    }

    a, small, i {
        color: white;
    }

    .fa-copyright {
        font-size: .5rem;
        margin-right: .3rem;
    }
    small {
        font-size: .6rem;
    }

    .copywright {
        justify-content: center;
        padding: .8rem 0 .6rem 0;
    }
</style>