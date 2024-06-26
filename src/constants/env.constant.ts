export const env = {
    ENV: process.env.REACT_APP_ENV as "production" | "staging" | "development",
    API_BO_ENDPOINT: process.env.REACT_APP_API_BO_ENDPOINT as string,
    FO_URL: process.env.REACT_APP_FO_URL as string,
    FO_X_API_KEY: process.env.REACT_APP_FO_X_API_KEY as string,
    SUB_PATH_BO: process.env.REACT_APP_SUB_PATH_BO as string,
    SUB_PATH_LOYALTY_BO: process.env.REACT_APP_SUB_PATH_LOYALTY_BO as string,
    SUB_PATH_FO: process.env.REACT_APP_SUB_PATH_FO as string,
    SUB_PATH_LOYALTY_FO: process.env.REACT_APP_SUB_PATH_LOYALTY_FO as string,
}
