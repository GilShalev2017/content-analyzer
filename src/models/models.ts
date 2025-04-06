export interface Result {

}


// Common enums and constants
export const ContentTypes = {
    TEXT: 'text',
    IMAGE: 'image',
    VIDEO: 'video',
    NEWS: 'news',
    OTHER: 'other'
};

export const ContentCategories = {
    HATE_SPEECH: 'hate_speech',
    SPAM: 'spam',
    HARASSMENT: 'harassment',
    EXPLICIT: 'explicit',
    SAFE: 'safe',
    TECH_COMPANY: 'TECH_COMPANY',
    VIOLENCE : 'violence',
    ADULT_CONTENT: 'adult_content'
};

export const ContentStatuses = {
    PENDING: 'pending',
    REVIEWED: 'reviewed',
    REMOVED: 'removed',
    APPROVED: 'approved'
};

export const AutoActions = {
    FLAG: 'flag_for_review',
    REMOVE: 'auto_remove',
    NONE: 'none'
};
