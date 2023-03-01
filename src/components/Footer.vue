<template>
    <!-- Footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info">
            <div class="footer-info__left">
                <div class="logo"></div>
                <p class="footer-info__left__text">
                Plan and book your perfect trip with <br />
                expert advice, travel tips destination <br />
                information from us
                </p>
                <p class="footer-info__left__rights">
                <!-- ©2020 Thousand Sunny. -->
            <span>All rights reserved</span>
                </p>
            </div>
            <div class="footer-info__right">
                <div class="columns-section">
                <div class="single-column">
                    <h4>Destinations</h4>
                    <ul>
                    <li>Africa</li>
                    <li>Antartica</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>America</li>
                    </ul>
                </div>
                <div class="single-column">
                    <h4>Shop</h4>
                    <ul>
                    <li>Destination Guides</li>
                    <li>Pictorial & Gifts</li>
                    <li>Special Offers</li>
                    <li>Delivey Times</li>
                    <li>FAQs</li>
                    </ul>
                </div>
                <div class="single-column">
                    <h4>Interests</h4>
                    <ul>
                    <li>Adventure Travel</li>
                    <li>Art and Culture</li>
                    <li>Wildlife and Nature</li>
                    <li>Family Holidays</li>
                    <li>Food and Drink</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <hr />
            <div class="footer__social-media">
            <div class="social-media__element">
                <img src="../assets/images/Vector_twitter.svg" alt="twitter" />
            </div>
            <div class="social-media__element">
                <img src="../assets/images/Vector_facebook.svg" alt="twitter" />
            </div>
            <div class="social-media__element">
                <img src="../assets/images/Vector_insta.svg" alt="twitter" />
            </div>
            <div class="social-media__element">
                <img src="../assets/images/Vector_in.svg" alt="twitter" />
            </div>
            <div class="social-media__element">
                <img src="../assets/images/Vector_Youtube.svg" alt="twitter" />
            </div>
            </div>
        </div>
        </div>
    <!-- Footer end -->
</template>
<script>
import Footer from '@/components/Footer.vue';
    export default {
        components: { Footer },
        };
    
</script>
<style lang="scss">
/* FOOTER
===================== */
    .footer {
    margin-top: 110px;
    background-color: #f9f9fb;
    }

    .footer-info {
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
    margin-bottom: 60px;
    }

    .footer-info__left {
    width: 30%;
    }

    .footer-info__left__text {
    font-family: "Mulish";
    font-weight: 300;
    font-size: 18px;
    color: #848484;
    margin-top: 30px;
    }

    .footer-info__left__rights {
    font-family: "Mulish";
    font-weight: 300;
    font-size: 17px;
    line-height: 28px;
    color: #848484;
    margin-top: 50px;
    }

    .footer-info__right {
    width: 60%;
    }

    .columns-section {
    display: flex;
    justify-content: space-between;
    }

    .single-column h4 {
    font-family: "Mulish";
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 10px;
    margin-top: 10px;
    }

    .single-column ul {
    font-family: "Mulish";
    font-weight: 300px;
    font-size: 18px;
    color: #848484;
    list-style: none;
    text-align: left;
    padding: 0;
    }

    .single-column li {
    padding-top: 15px;
    }

    .footer hr {
    color: #c4c4c4;
    height: 0.6px;
    }

    .footer__social-media {
    display: flex;
    justify-content: space-between;
    width: 20%;
    align-items: center;
    margin: 30px auto;
    }
</style>