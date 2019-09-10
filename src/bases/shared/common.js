//#region Import
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyConfirm from 'pnotify/dist/es/PNotifyConfirm';
import PNotifyAnimate from 'pnotify/dist/es/PNotifyAnimate';
import "@node_modules/material-design-icons/iconfont/material-icons.css";
import * as ConfigConstants from '@constants/ConfigConstants';
//#endregion

//#region Notify 
export const notifyInfo = ({ text = "Thành công" }) => {
    PNotify.defaults.styling = 'material';
    PNotify.defaults.icons = 'material';
    PNotify.closeAll();
    if (typeof window.stackBottomRight === 'undefined') {
        window.stackBottomRight = {
            'dir1': 'up',
            'dir2': 'left',
            'firstpos1': 25,
            'firstpos2': 25
        };
    }
    return PNotify.info({
        text: text,
        modules: {
            Animate: {
                animate: true,
                inClass: 'fadeIn',
                outClass: 'fadeOut'
            }
        },
        stack: window.stackBottomRight
    })

}

export const notifySuccess = ({ text = "Thành công" }) => {
    PNotify.defaults.styling = 'material';
    PNotify.defaults.icons = 'material';
    PNotify.closeAll();
    if (typeof window.stackBottomRight === 'undefined') {
        window.stackBottomRight = {
            'dir1': 'up',
            'dir2': 'left',
            'firstpos1': 25,
            'firstpos2': 25
        };
    }
    return PNotify.success({
        text: text,
        //delay: 2000,
        modules: {
            Animate: {
                animate: true,
                inClass: 'fadeIn',
                outClass: 'fadeOut'
            }
        },
        stack: window.stackBottomRight
    })

}

export const notifyNotice = ({ text = "Thông báo" }) => {
    PNotify.defaults.styling = 'material';
    PNotify.defaults.icons = 'material';
    PNotify.closeAll();
    if (typeof window.stackBottomRight === 'undefined') {
        window.stackBottomRight = {
            'dir1': 'up',
            'dir2': 'left',
            'firstpos1': 25,
            'firstpos2': 25
        };
    }
    return PNotify.notice({
        text: text,
        modules: {
            Animate: {
                animate: true,
                inClass: 'fadeIn',
                outClass: 'fadeOut'
            }
        },
        stack: window.stackBottomRight
    });
}

export const notifyError = ({ text = "Có lỗi xảy ra" }) => {
    PNotify.defaults.styling = 'material';
    PNotify.defaults.icons = 'material';
    PNotify.closeAll();
    if (typeof window.stackTopCenter === 'undefined') {
        window.stackTopCenter = {
            'dir1': 'up',
            'dir2': 'left',
            'firstpos1': 25,
            'firstpos2': 25
        };
    }
    return PNotify.error({
        text: text,
        hide: false,
        modules: {
            Animate: {
                animate: true,
                inClass: 'fadeIn',
                outClass: 'fadeOut'
            },
            Confirm: {
                confirm: true,
                buttons: [{
                    text: 'Xác nhận',
                    primary: true,
                    click: function (notice) {
                        notice.close();
                    }
                }]
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            }
        },
        stack: window.stackTopCenter
    });
}

export const confirmNotice = ({ text = "Bạn có chắc chắn muốn xóa !" }, callBack) => {
    PNotify.defaults.styling = 'material';
    PNotify.defaults.icons = 'material';
    PNotify.closeAll();
    return PNotify.error({
        text: text,
        hide: false,
        stack: {
            'dir1': 'down',
            'modal': true,
            'firstpos1': 25
        },
        modules: {
            Confirm: {
                confirm: true,
                buttons: [
                    {
                        text: 'Xác nhận',
                        textTrusted: true,
                        addClass: '',
                        primary: true,
                        promptTrigger: true,
                        click: (notice, value) => {
                            notice.close();
                            callBack();
                        }
                    },
                    {
                        text: 'Hủy',
                        textTrusted: true,
                        addClass: '',
                        click: (notice) => {
                            notice.close();
                        }
                    }
                ],
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            },
        }
    });


}
//#endregion

// Capitalize
export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//#region Sắp xếp
export const sortDesc = (a, b, orderBy) => {
    if (b.id < a.id) {
        return -1;
    }
    if (b.id > a.id) {
        return 1;
    }
    return 0;
}