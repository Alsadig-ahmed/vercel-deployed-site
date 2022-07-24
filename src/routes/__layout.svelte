<script>
    import Header from '../components/header/Header.svelte';
    import Footer from '../components/footer/Footer.svelte';

import '../global.scss'
import '../app.css'
</script>
<Header />
<slot></slot>
<Footer />