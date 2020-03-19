export const Hello = {
    template: `
        <p>
            State counter pada hello:
            {{ counter }}
        </p>
    `,
    computed: {
        counter () {
            // store.state.counter
            return this.$store.state.counter
        }
    },
}