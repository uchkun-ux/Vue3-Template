<template>
        <div class="trending">
        <div class="container">
            <div class="trending__head">
            <img
                src="@/assets/images/star.svg"
                alt="star"
                class="trending__star-icon"
            />
            <div class="trending__head__title">Trending stories</div>
            <div class="trending__head__link">
                <a href="#">View all ></a>
            </div>
            </div>
            <div class="trending__cards">
            <div class="trending__card">
                <div class="trending__card__img">
                <img src="@/assets/images/trending_1.png" alt="trending photo" />
                <div class="trending__card__body">
                    <div class="trending__card__title">
                    The many benefits of taking a healing holiday
                    </div>
                    <div class="trending__card__text">
                    Helaing holidays are on the rise tohelp maximise your health
                    and happines...
                    </div>
                    <div class="trending__link">
                    <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="trending__card">
                <div class="trending__card__img">
                <img src="@/assets/images/trending_2.jpg" alt="trending photo" />
                <div class="trending__card__body">
                    <div class="trending__card__title">
                    The best Kyoto restaurant to try Japanese food
                    </div>
                    <div class="trending__card__text">
                    From tofu to teahouses, heres our guide to Kyotos best
                    restaurants to visit...
                    </div>
                    <div class="trending__link">
                    <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="trending__card">
                <div class="trending__card__img">
                <img src="@/assets/images/trending_3.png" alt="trending photo" />
                <div class="trending__card__body">
                    <div class="trending__card__title">
                    Skip Chichen Itza and head to this remote Yucatan
                    </div>
                    <div class="trending__card__text">
                    Its remote and challenging to get, but braving the jungle and
                    exploring these ruins without the...
                    </div>
                    <div class="trending__link">
                    <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="trending__card">
                <div class="trending__card__img">
                <img src="@/assets/images/trending_4.png" alt="trending photo" />
                <div class="trending__card__body">
                    <div class="trending__card__title">
                    Surfs up at these beginner spots around the world
                    </div>
                    <div class="trending__card__text">
                    If learning to surf has in on your to- do list for a while,
                    the good news is: its never too late...
                    </div>
                    <div class="trending__link">
                    <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</template> 
<script>
export default{
    data() {
    return
    }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

    .trending {
    margin-bottom: 196px;

    }
    .trending__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 56px;
    position: relative;
    }

    .trending__star-icon {
    position: absolute;
    left: 400px;
    top: -70px;
    }
    .trending__head__title {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #000000;
    }

    .trending__head__link a {
    text-decoration: none;
    color: #fb8f1d;
    font-family: Inter;
    font-weight: 600;
    font-size: 17px;
    }

    .trending__cards {
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin: 0 -15px -30px;
    }

    .trending__card {
    padding: 0 15px 30px;
    height: 446px;
    }

    .trending__card__img {
    position: relative;
    z-index: 1;
    }

    .trending__card__body {
    max-width: 261px;
    position: absolute;
    bottom: -104px;
    z-index: 2;
    background-color: white;
    padding-top: 20px;
    }

    .trending__card__title {
    font-family: Inter;
    font-weight: bold;
    font-size: 19px;
    line-height: 30px;
    width: 261px;
    margin-bottom: 13px;
    }

    .trending__card__text {
    font-family: Inter;
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    margin-bottom: 20px;
    }

    .trending__link a {
    text-decoration: none;
    color: #fb8f1d;
    font-family: Inter;
    font-weight: 600;
    font-size: 15px;
    }


</style>