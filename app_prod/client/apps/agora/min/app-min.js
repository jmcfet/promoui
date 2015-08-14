var Agora=(function(){var w=window.parent.$N,n=new w.apps.core.Log("Agora","Agora"),C=7,N=new w.app.DirectChannelEntry(w.app.constants.MAX_CHANNEL_DIGITS,w.app.constants.CHANNEL_ENTRY_TIMEOUT_MS),r=false,I=0,o=false,S=null,U=0,B=30000,t=null,h={},P=null,E=null,x={getString:function(V){return Agora.getString(V);},getTitle:function(W){if(W){var V=w.platform.btv.EPG.getChannelByServiceId(W.serviceId);if(w.app.ParentalControlUtil.isChannelOrProgramLocked(W)){if(w.app.genreUtil.isAdultChannel(V)){return Agora.getString("adultContent");}}}if(W&&W.title){return W.title.trim();}return Agora.getString("programInfoUnavailable");},getSeriesEpisodeTitle:function(V){if(w.app.ParentalControlUtil.isChannelOrProgramLocked(V)){if(w.app.genreUtil.isAdultChannel(w.platform.btv.EPG.getChannelByServiceId(V.serviceId))){return"";}}return w.app.epgUtil.getSeasonEpisodeShort(V);},getProgressBarData:function(V){return{minimum:(V&&V.startTime)?V.startTime:0,maximum:(V&&V.endTime)?V.endTime:0,progress:(V&&V.startTime)?new Date().getTime():0};},getEventObj:function(W){if(W){var V=W._data||W;if(!r){return w.app.epgUtil.getEvent("current",V.serviceId);}else{return w.app.epgUtil.getEvent("next",V.serviceId);}}else{return null;}},isRecording:function(V){var W=w.platform.btv.PVRManager.getRecordingStatusByEvent(V);switch(W){case w.app.PVRUtil.ACTIVE:case w.app.PVRUtil.SCHEDULED:case w.app.PVRUtil.ACTIVE_IN_SERIES:case w.app.PVRUtil.SCHEDULED_BY_SERIES:return true;}return false;},isAseguirView:function(){return r;},getRedButton:function(){return h.buttonIcons.redButton;},getFocusServiec:function(){return P.getData()[P.getActualSelectedRowIndex()-1];},setReminderButtonLabel:function(V){if(V){if(w.platform.btv.Reminders.isReminderSetForEventId(V)){h.buttonIcons.yellowButton.setText(Agora.getString("cancelReminder"));}else{h.buttonIcons.yellowButton.setText(Agora.getString("setReminder"));}}}},Q,z=null;function f(){h.noChannelMsg.setText(Agora.getString("noChannel"));h.agoraFavOK.okIcon.setText(Agora.getString("addToFavourite"));h.agoraFavOK.okIcon.show();h.noChannelMsg.show();}function M(){h.noChannelMsg.hide();h.agoraFavOK.okIcon.hide();}function O(){var V=w.app.genreUtil.getGenreTitle(I);E.reset();E.show();if(r){E.push(Agora.getString("nextTitle"));}else{E.push(Agora.getString("nowTitle"));}E.push(V);}function i(){I=w.app.genreUtil.GENRE_ALLCHANNELS;}function e(){if(r){h.buttonIcons.redButton.show();h.buttonIcons.greenButton.show();h.buttonIcons.okButton.hide();h.buttonIcons.yellowButton.show();h.buttonIcons.leftArrow.show();h.buttonIcons.rightArrow.hide();}else{h.buttonIcons.redButton.show();h.buttonIcons.greenButton.show();h.buttonIcons.okButton.show();h.buttonIcons.yellowButton.hide();h.buttonIcons.leftArrow.hide();h.buttonIcons.rightArrow.show();}M();O();}function m(Y){var W,X=P.getData(),V=null;if(Y){V=w.app.epgUtil.getNextClosestService(Y,X);if(V){for(W=0;W<X.length;W++){if(X[W].logicalChannelNum===V.logicalChannelNum){P.selectItemAtIndex(W+1,true);X=null;V=null;return true;}}}}return false;}function G(V,W){if(V){h.upArrow.setHref("../../../customise/resources/svg/icons.svg#greyGuideUpArrowIcon");}else{h.upArrow.setHref("../../../customise/resources/svg/icons.svg#guideUpArrowIcon");}if(W){h.downArrow.setHref("../../../customise/resources/svg/icons.svg#greyGuideDownArrowIcon");}else{h.downArrow.setHref("../../../customise/resources/svg/icons.svg#guideDownArrowIcon");}}function L(){if(P.getData().length>=0&&P.getData().length<=C){h.upArrow.hide();h.downArrow.hide();}else{h.upArrow.show();h.downArrow.show();}}function R(){if(t){clearTimeout(t);t=null;}if(N&&N.isActive()){}else{P.displayData();L();}t=setTimeout(R,B);}function A(){if(z){I=z;z=null;}}function b(){z=I;}function v(){R();}function j(){var X=P.getData()[P.getActualSelectedRowIndex()-1],W=w.app.ParentalControlUtil.isChannelLocked(X),V=x.getEventObj(X);b();if(w.app.EventUtil.isValidEvent(V)){if(w.app.ParentalControlUtil.isChannelOrProgramLocked(V)&&w.app.genreUtil.isAdultChannel(X)){Q.setDialogProperties({x:0,y:0,width:1920,height:1080,id:"agoraPinDialogId",title:W?Agora.getString("channelLocked"):Agora.getString("programLocked"),description:W?Agora.getString("unlockChannel"):Agora.getString("unlockShow"),cancelCallback:function(){Q.hideDialog();}});Q.setAuthenticationSuccessCallback(function(){b();w.app.epgUtil.navigateToSynopsis(V,false,v);});Q.showPinDialog("master",true);}else{b();w.app.epgUtil.navigateToSynopsis(V,false,v);}}}function p(){var W=P.getData()[P.getActualSelectedRowIndex()-1],V=x.getEventObj(W);w.app.Reminders.setReminders(V,function(){R();});}function q(){var W=P.getData()[P.getActualSelectedRowIndex()-1],V=x.getEventObj(W);w.platform.btv.Reminders.cancelReminder(V);}function u(){var W=P.getData()[P.getActualSelectedRowIndex()-1],V=x.getEventObj(W);if(w.app.EventUtil.isValidEvent(V)){w.app.PVRUtil.cancelEvent(V);}}function d(V,W){P.setData(V);if(W){R();if(!o){e();}}}function s(){var V=[];V=w.app.ChannelManager.getChannelListByGenreIndex(I);if(V.length>0){o=false;M();}else{o=true;f();h.buttonIcons.okButton.hide();h.buttonIcons.yellowButton.hide();h.buttonIcons.redButton.show();h.buttonIcons.greenButton.show();h.buttonIcons.rightArrow.hide();O();}return V;}function g(){var V=[];if(I===w.app.genreUtil.GENRE_FAVORITE){I=w.app.genreUtil.GENRE_ALLCHANNELS;V=w.platform.btv.EPG.getVideoChannelsOrderedByChannelNumber();o=false;M();}else{I=w.app.genreUtil.GENRE_FAVORITE;V=s();}d(V,true);V=null;}function H(){var V=null;S=w.app.genreUtil.getGenreTitle(I);if(I===w.app.genreUtil.GENRE_FAVORITE){V=s();}else{o=false;V=w.app.ChannelManager.getChannelListByGenreIndex(I);}d(V,true);V=null;}function K(){var W=0,V=null;if(w.app.epgUtil.getChannelFromPrefs()){V=w.platform.btv.EPG.getChannelByServiceId(w.app.epgUtil.getChannelFromPrefs());if(V&&V.logicalChannelNum){m(V.logicalChannelNum);}else{m(0);}}R();V=null;}function a(W){var V=w.app.epgUtil.getNextClosestService(W,P.getData());if(V){V.showBanner=true;w.app.ContextHelper.openContext("ZAPPER",{activationContext:V});V=null;}}function y(){var V=P.getData()[P.getActualSelectedRowIndex()-1]||null;if(V){P.getActualSelectedItem().update(V);P.getActualSelectedItem().updateHighlight();V=null;}}function D(){var V=P.getActualSelectedItem();if(V){V.setServiceNumber(U);V.updateForChannelEntryOver();}N.cancelEntry();}function k(W){var V=w.app.epgUtil.getNextClosestService(W,P.getData());P.getActualSelectedItem().updateForChannelEntryOver();if(V&&V.logicalChannelNum){m(V.logicalChannelNum);}else{D();}}function c(){R();}function F(){h.buttonIcons.redButton.setText(Agora.getString("redKeyName"));h.buttonIcons.greenButton.setText(Agora.getString("greenKeyName"));h.buttonIcons.okButton.setText(Agora.getString("okKeyName"));h.buttonIcons.leftArrow.setText(Agora.getString("leftKeyName"));h.buttonIcons.rightArrow.setText(Agora.getString("rightKeyName"));h.buttonIcons.initialise();}function J(){Q.hideDialog();}function l(W,V){var X=function(){Q.hideDialog();};Q.handlePinKeyPressCallback(V,X);}function T(V){Q.setDialogProperties({x:0,y:0,width:1920,height:1080,id:"agoraPinDialogId",title:V?Agora.getString("channelLocked"):Agora.getString("programLocked"),description:V?Agora.getString("unlockChannel"):Agora.getString("unlockShow"),keyPressedCallback:l});Q.setAuthenticationSuccessCallback(function(){a(P.getActualSelectedItem().getServiceNumber());});Q.showPinDialog("master",true);}Q=new w.app.PinHelper(null,null,null,J,w.app.constants.PIN_DIALOG_SHOW_TIME,false);return{load:function(){w.gui.ResolutionManager.initialiseContext(document);w.apps.core.Language.importLanguageBundleForObject(Agora,Agora.init,"apps/agora/common/","LanguageBundle.js",F,window);},init:function(){w.gui.FrameworkCore.loadGUIFromXML("apps/agora/view/agora.xml",document.getElementById("content"),h,window);P=h.menuList;E=h.title;w.app.GeneralUtil.mixin(x,w.app.DataMappers.getServiceDataMapper());P.setDataMapper(x);P.initialise();P.setUpDownPageable(true);N.setChannelEnteredCallback(function(V){k(V);});P.setListPagedCallback(G);h.buttonIcons.initialise();w.apps.core.ContextManager.initialisationComplete(Agora);E.setParentLabelCss("breadcrumbTitle");E.setChildLabelCss("breadcrumbSubTitle");h.agoraFavOK.okIcon.setCssClassForLabel("addToFavTitle");},activate:function(){w.app.BrandHelper.show(w.app.BrandHelper.AGORA_BACKGROUND_ID);P.setData(w.platform.btv.EPG.getVideoChannelsOrderedByChannelNumber());r=false;I=w.app.genreUtil.GENRE_ALLCHANNELS;z=null;o=false;F();e();M();K();w.app.PVRUtil.registerUIRefreshListener(c,this);w.app.ClockDisplay.show();w.platform.btv.PVRManager.setRecordingRequestConflictsCallback(w.app.Conflicts.onRecordingFailed);w.platform.btv.PVRManager.setTaskAboutToStartConflictCallback(w.app.Conflicts.onRecordingFailed);P.focus();},passivate:function(){if(t){clearTimeout(t);t=null;}P.defocus();w.app.PVRUtil.unregisterUIRefreshListener(c);w.app.BrandHelper.hideAll();w.app.ClockDisplay.hide();w.app.TimerUtil.stopTimer("recordIcon");w.platform.btv.PVRManager.setRecordingRequestConflictsCallback(function(){});w.platform.btv.PVRManager.setTaskAboutToStartConflictCallback(function(){});},focus:function(){A();P.select();e();w.app.BrandHelper.show(w.app.BrandHelper.AGORA_BACKGROUND_ID);P.focus();},defocus:function(){i();P.defocus();},preview:function(){},dismissPreview:function(){},toString:function(){return"AGORA";},directChannelEntryKeyHandler:function(V,W){var X=false;switch(V){case W.KEY_ZERO:case W.KEY_ONE:case W.KEY_TWO:case W.KEY_THREE:case W.KEY_FOUR:case W.KEY_FIVE:case W.KEY_SIX:case W.KEY_SEVEN:case W.KEY_EIGHT:case W.KEY_NINE:if(!N.isActive()){U=P.getActualSelectedItem().getServiceNumber();P.getActualSelectedItem().updateForChannelEntry();}N.updateChannelDigits(V,P.getActualSelectedItem()._channelNum,P.getActualSelectedItem()._cursor);X=true;break;case W.KEY_LEFT:case W.KEY_BACK:if(N.isActive()){N.updateChannelDigits(V,P.getActualSelectedItem()._channelNum,P.getActualSelectedItem()._cursor);X=true;}break;case W.KEY_OK:if(N.okKeyHandler()){X=true;}break;default:if(w.app.GeneralUtil.isKeyReleaseEvent(V)){return false;}if(N.isActive()){D();}}return X;},keyHandler:function(X,V){var Y=w.apps.core.KeyInterceptor.getKeyMap(),Z,W;w.app.MemoryUtil.setOrUpdateGarbageCollectTimeoutAndInterval();if(V){switch(X){case Y.KEY_GUIDE:return true;}}if(N&&P.getData().length>0){if(this.directChannelEntryKeyHandler(X,Y)){return true;}}switch(X){case Y.KEY_LEFT:if(r){r=false;F();e();if(I===w.app.genreUtil.GENRE_ALLCHANNELS){R();}else{H();}}return true;case Y.KEY_RIGHT:if(!r){r=true;F();e();if(I===w.app.genreUtil.GENRE_ALLCHANNELS){R();}else{H();}}return true;case Y.KEY_FAVOURITES:g();return true;case Y.KEY_RED:case Y.KEY_INFO:if(P.getData().length>0){j();}return true;case Y.KEY_GREEN:I=I+1>=w.app.genreUtil.getAmountOfGenres()?0:I+1;H();return true;case Y.KEY_YELLOW:if(r&&P.getData().length>0){Z=P.getData()[P.getActualSelectedRowIndex()-1];W=x.getEventObj(Z);if(w.platform.btv.Reminders.isReminderSetForEventId(W)){q();}else{p();}}return true;case Y.KEY_RECORD:if(P.getData().length>0){Z=P.getData()[P.getActualSelectedRowIndex()-1];W=x.getEventObj(Z);if(w.app.EventUtil.isValidEvent(W)&&!w.app.ChannelManager.isInteractiveChannel(Z)){w.app.PVRUtil.recordOrCancelEvent(W);}}return true;case Y.KEY_STOP:if(P.getData().length>0){u();}return true;case Y.KEY_OK:if(P.getData().length>0){a(P.getActualSelectedItem().getServiceNumber());}if(o){w.app.FavouritesUtil.launchFavoritesApp();}return true;}return P.keyHandler(X);}};}());