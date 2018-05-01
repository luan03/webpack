"use strict";

var Luan = Luan || {};
Luan.Utils = Luan.Utils || {};
Luan.Models = Luan.Models || {};
Luan.Views = Luan.Views || {};

/*
 * Global Configuration
 */
   Luan.Utils.config = {
    version: "1.0.1",
    statusApp: "Loaded",
    timeRun: "full time",
    queued: false,

    CONSTANTS: {
        INIT: { INITOK: 1, INITFAIL: 0},
        STATEVIEW: { IDLE: "IDLE", DDINPROGRESS: "DDINPROGRESS"}
    }
};