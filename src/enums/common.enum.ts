//create enum langCodeEnum for all language code
export enum LangCodeEnum {
    EN = "en",
    AF = "af",
    SQ = "sq",
    AM = "am",
    AR = "ar",
    HY = "hy",
    AS = "as",
    AY = "ay",
    AZ = "az",
    BA = "ba",
    EU = "eu",
    BN = "bn",
    DZ = "dz",
    BH = "bh",
    BI = "bi",
    BR = "br",
    BG = "bg",
    MY = "my",
    BE = "be",
    KM = "km",
    CA = "ca",
    ZH = "zh",
    CO = "co",
    HR = "hr",
    CS = "cs",
    DA = "da",
    NL = "nl",
    EO = "eo",
    ET = "et",
    FO = "fo",
    FA = "fa",
    FI = "fi",
    FR = "fr",
    FY = "fy",
    GD = "gd",
    GL = "gl",
    KA = "ka",
    DE = "de",
    EL = "el",
    KL = "kl",
    GN = "gn",
    GU = "gu",
    HA = "ha",
    HE = "he",
    HI = "hi",
    HU = "hu",
    IS = "is",
    ID = "id",
    IA = "ia",
    IE = "ie",
    IU = "iu",
    IK = "ik",
    GA = "ga",
    IT = "it",
    JA = "ja",
    JV = "jv",
    KN = "kn",
    KS = "ks",
    KK = "kk",
    RW = "rw",
    KY = "ky",
    RN = "rn",
    KO = "ko",
    KU = "ku",
    LO = "lo",
    LA = "la",
    LV = "lv",
    LT = "lt",
    MK = "mk",
    MG = "mg",
    MS = "ms",
    ML = "ml",
    MT = "mt",
    MI = "mi",
    MR = "mr",
    MO = "mo",
    MN = "mn",
    NA = "na",
    NE = "ne",
    NO = "no",
    OC = "oc",
    OR = "or",
    OM = "om",
    PS = "ps",
    PL = "pl",
    PT = "pt",
    PA = "pa",
    QU = "qu",
    RM = "rm",
    RO = "ro",
    RU = "ru",
    SM = "sm",
    SG = "sg",
    SA = "sa",
    SR = "sr",
    SH = "sh",
    ST = "st",
    TN = "tn",
    SN = "sn",
    SD = "sd",
    SI = "si",
    SS = "ss",
    SK = "sk",
    SL = "sl",
    SO = "so",
    ES = "es",
    SU = "su",
    SW = "sw",
    SV = "sv",
    TL = "tl",
    TG = "tg",
    TA = "ta",
    TT = "tt",
    TE = "te",
    TH = "th",
    BO = "bo",
    TI = "ti",
    TO = "to",
    TS = "ts",
    TR = "tr",
    TK = "tk",
    TW = "tw",
    UK = "uk",
    UR = "ur",
    UZ = "uz",
    VI = "vi",
    VO = "vo",
    CY = "cy",
    WO = "wo",
    XH = "xh",
    YI = "yi",
    ZU = "zu",
}

export enum MessageValidateForm {
    Required = "This field is required.",
    InvalidUrl = "Please enter a valid url.",
    InvalidEmail = "Please enter a valid email address",
    RequiredUpload = "Please upload file",
    ConfirmPassword = "New passwords and confirming passwords are not the same.",
}

export enum NotificationTypeEnum {
    Success = "success",
    Error = "error",
    Warning = "warning",
    Info = "info",
}

export enum NotificationMessageEnum {
    CreateSuccess = "Create successfully",
    UpdateSuccess = "Update successfully",
    DeleteSuccess = "Delete successfully",

    CreateError = "Create failed",
    UpdateError = "Update failed",
    DeleteError = "Delete failed",

    LoginSuccess = "Login successfully",
    LoginError = "Login failed",

    UploadSuccess = "Upload successfully",
    UploadError = "Upload failed",

    ClearCacheSuccess = "Clear cache successfully",
    ClearCacheError = "Clear cache failed",

    ResetPasswordError = "Reset password failed",

    ChangePasswordSuccess = "Change password successfully",
    ChangePasswordError = "Change password failed",

    UpdateStatusContentError = "Update status content failed",

    AutoRunSuccess = "Auto run successfully",
    AutoRunError = "Auto run failed",
}

export enum NotificationTitleEnum {
    Success = "Success",
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
}

export enum StatusEnum {
    Activated = "Activated",
    Deactivated = "Deactivated",
}

export enum DeviceTypeEnum {
    Mobile = "Mobile",
    Desktop = "Desktop",
    Tablet = "Tablet",
}

export enum RelEnum {
    NO_FOLLOW = "nofollow",
    DO_FOLLOW = "dofollow",
    CANONICAL = "canonical",
}
