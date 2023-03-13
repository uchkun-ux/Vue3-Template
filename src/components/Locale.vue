    <template>
        <div>
        <v-select
            v-model="locale"
            :items="locales"
            item-text="locale"
            item-value="locale"
            append-icon=""
            class="locale"
        >
        </v-select>
        </div>
    </template>
    
    <script>
    import {loadLanguageAsync} from "@/locales/i18n";
    import config from "@/config";
    
    export default {
        name: "Locale",
        data: function () {
        return {
            locales: config.locales
        }
        },
        computed: {
        locale: {
            get: function () {
            return {locale: this.$i18n.locale}
            },
            set: function (locale) {
            loadLanguageAsync(locale)
            }
        },
        },
        created() {
        loadLanguageAsync(localStorage.getItem('lang'))
        }
    }
    </script>