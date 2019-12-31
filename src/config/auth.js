console.log(process.env.APP_SECRET);

export default {
    secret: process.env.APP_SECRET,
    expiresIn: '7d',
};
