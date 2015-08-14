var Mosaic=(function(){var ai=window.parent.$N,i=new ai.apps.core.Log("Mosaic","Mosaic"),aH=63,ao=90,S=1920,l=10,T=350,p=12,ac=ai.app.constants.KEY_RELEASE_SUFFIX,aG=0,ar=true,e=true,L=null,V=false,az=null,E=null,b=null,c=ai.app.constants.KEY_RELEASE_TIMEOUT_MS,w=0,x=[],ad="../../../customise/resources/images/net/ep1.png",o=ai.app.constants.CA_PLAY_ERRORS.streamDisabledReason,J=1000,aq=null,aI=true,j={getEventObj:function(aL){if(aL){var aK=aL._data||aL;return ai.app.epgUtil.getEvent("current",aK.serviceId);}else{return null;}}},aF={getServiceName:function(aL){var aK=aL._data||aL,aM=aK.name||"";return aM;},getServiceNumber:function(aL){var aK=aL._data||aL,aM=aK.logicalChannelNum||aK.number||aK.channelKey||"";return aM;},getEventTitle:function(aL){if(aL&&ai.app.ParentalControlUtil.isChannelOrProgramLocked(aL)){var aK=ai.platform.btv.EPG.getChannelByServiceId(aL.serviceId);if(aK&&ai.app.genreUtil.isAdultChannel(aK)){return Mosaic.getString("adultContent");}}return aL.title||"";},getEventSeriesEpisodeTitle:function(aL,aM){if(aL&&!ai.platform.ca.ParentalControl.isCurrentUserMaster()){var aK=ai.platform.btv.EPG.getChannelByServiceId(aL.serviceId);if(aK&&ai.app.genreUtil.isAdultChannel(aK)){return"";}}return ai.app.epgUtil.getSeasonEpisodeShort(aL);},getEventGenre:function(aK){var aL=aK._data||aK;return ai.app.genreUtil.getGenresByEvent(aL);},getRecordingStatus:function(aK){var aL=aK._data||aK;return ai.platform.btv.PVRManager.getRecordingStatusByEvent(aL);},getDescription:function(aL){var aM=aL._data||aL,aK;if(aL&&ai.app.ParentalControlUtil.isChannelOrProgramLocked(aL)){aK=ai.platform.btv.EPG.getChannelByServiceId(aL.serviceId);if(aK&&ai.app.genreUtil.isAdultChannel(aK)){return Mosaic.getString("adultContent");}else{if(ai.app.epgUtil.isAdultEvent(aL)){return Mosaic.getString("synopsisUnavailable");}}}return aM.longDesc||aM.shortDesc||"";},getProgressBarData:function(aK){return{minimum:(aK&&aK.startTime)?aK.startTime:0,maximum:(aK&&aK.endTime)?aK.endTime:0,progress:(aK&&aK.startTime)?new Date().getTime():0};},isAdultChannel:function(aL){var aK=ai.platform.btv.EPG.getChannelByServiceId(aL.serviceId);return ai.app.genreUtil.isAdultChannel(aK);}},au=0,h=0,v=false,ax="",n="",U=false,q={},aD={},aB={},an={},K=0,ag=480,R=null,ae=null;function A(){var aK=q.getSelectedItem(),aL=j.getEventObj(aK);if(aK&&aL){an.indicator.RCUIcn.setVisible(ai.app.PVRCapability.isPVREnabled()&&ai.app.PVRUtil.isRecordable(aL,aK));}else{an.indicator.RCUIcn.setVisible(false);}}function s(aK){A();}function W(){an.indicator.redIcn.setText(Mosaic.getString("redKeyName"));an.indicator.greenIcn.setText(Mosaic.getString("greenKeyName"));an.indicator.RCUIcn.setText(Mosaic.getString("RCUKeyName"));an.OK.okIcn.setText(Mosaic.getString("okKeyName"));an.indicator.initialise();}function aA(){an.indicator.redIcn.show();an.OK.okIcn.show();}function aJ(aL){var aM=an.indicator.redIcn.getHref(),aK=aL?ai.app.constants.ACTIVE_INFO_BUTTON_PATH:ai.app.constants.INACTIVE_INFO_BUTTON_PATH;if(aM!==aK){an.indicator.redIcn.setHref(aK);}if(ai.app.PVRCapability.isPVREnabled()&&aL){an.indicator.RCUIcn.show();}else{an.indicator.RCUIcn.hide();}}function aj(){if(!e){an.indicator.RCUIcn.hide();an.OK.okIcn.hide();}else{A();an.OK.okIcn.show();}}function k(aK,aL){if(aK){if(aK.uri===n){aD.setOpacity(1);if(!aI){aD.showSmartCardNotInsertedText();}else{aD.showUnsubscribeText();}aj();}else{if(aK&&ax===aK.uri){aD.setOpacity(0);}else{aD.tuneScaledVideo(aK,aL);aD.setOpacity(1);}}}}function aE(){if(ae){aG=ae;ae=null;}}function y(){ae=aG;}function B(){var aK=q.getSelectedItem(),aL=j.getEventObj(aK);}function ab(){var aK=q.getSelectedItem(),aM=ai.app.ParentalControlUtil.isChannelLocked(aK),aL=j.getEventObj(aK);if(ai.app.ParentalControlUtil.isChannelOrProgramLocked(aL)&&ai.app.genreUtil.isAdultChannel(aK)){E.setDialogProperties({x:0,y:0,width:1920,height:1080,id:"mosaicPinDialogId",title:aM?Mosaic.getString("channelLocked"):Mosaic.getString("programLocked"),description:aM?Mosaic.getString("unlockChannel"):Mosaic.getString("unlockShow"),cancelCallback:function(){E.hideDialog();}});E.setAuthenticationSuccessCallback(function(){y();ai.app.epgUtil.navigateToSynopsis(aL,false,B);});E.showPinDialog("master",true);}else{y();ai.app.epgUtil.navigateToSynopsis(aL,false,B);}}function f(){if(ar){return;}if(q.isAtFirstPage()){an.upArrow.hide();}else{an.upArrow.show();}if(q.isAtLastPage()){an.downArrow.hide();}else{an.downArrow.show();}}function N(aK){var aM=ai.apps.util.Util.formatTime(new Date(aK.minimum),"HH:MM"),aL=ai.apps.util.Util.formatTime(new Date(aK.maximum),"HH:MM");aB.progressBar.setMinimumValue(aK.minimum);aB.progressBar.setMaximumValue(aK.maximum);aB.eventStartTime.setText(aM);aB.eventEndTime.setText(aL);aB.progressBar.setProgress(aK.progress);w=aK.maximum;}function ah(aK,aQ){var aL=aB.getTrueX(),aR=94,aP=an.eventTitle.getText(),aS="",aN,aO,aU="",aM="",aT=480;au=S-aL-aR;aU=aF.getEventSeriesEpisodeTitle(aK,aQ);aM=aF.getEventTitle(aK);if(aU){aM=aM+" - "+aU;}an.eventTitle.hide();an.eventTitleWithEpisode.show();an.eventTitleWithEpisode.setText(aM);an.eventTitleWithEpisode.setSpanOnText(aU);if(an.eventTitleWithEpisode.getTrueTextLength()>ag){an.eventTitleWithEpisode.hide();an.eventTitle.show();an.eventTitle.setText(aM);}}function g(){var aL=j.getEventObj(q.getSelectedItem()),aK=null;aB.startOverIcon.update(aL);aK=aB.startOverIcon.isVisible()?T+aB.startOverIcon.getTrueWidth()+p:T;aB.recordIcon.update(aL,aK);}function am(aK){if(aK){aB.parentalRatingIcon.show();aB.eventGenre.show();aB.eventDescription.show();aB.eventStartTime.show();aB.progressBar.show();aB.eventEndTime.show();}else{aB.parentalRatingIcon.hide();aB.eventGenre.hide();aB.eventDescription.hide();aB.eventStartTime.hide();aB.progressBar.hide();aB.eventEndTime.hide();aB.recordIcon.hide();aB.startOverIcon.hide();}}function al(aK){var aL=true;if(aK&&aK.activeMode&&aK.activeMode==="mosaicKey"){ai.app.fullScreenPlayer.stopPlayout(aL);v=true;}}function af(){var aK=null,aL=null,aM=null;if(ar){aB.hide();an.eventTitle.show();an.eventTitleWithEpisode.hide();aJ(false);an.indicator.RCUIcn.hide();an.indicator.redIcn.show();an.indicator.greenIcn.show();an.eventTitle.setText("");}else{aB.show();an.indicator.show();aK=q.getSelectedItem();aL=j.getEventObj(aK);aM=ai.app.epgUtil.getExtendedInfoByEventId(aL.eventId);ai.app.epgUtil.storeChannelToPrefs(aK.serviceId);if(v){k(aK,aL);v=false;}if(aK){an.serviceName.setText(aF.getServiceName(aK));an.serviceName.show();an.serviceNumber.setText(aF.getServiceNumber(aK));an.serviceNumber.show();}if(ai.app.EventUtil.isValidEvent(aL)){V=ai.app.ParentalControlUtil.isChannelOrProgramLocked(aL)||aF.isAdultChannel(aL);e=true;aj();if(V){ax="";aD.updatePreview(aK,aL);}else{if(ai.app.fullScreenPlayer.getSource()===aK.uri){ax=ai.app.fullScreenPlayer.getSource();aD.updateEventPoster(aL);}else{aD.updatePreview(aK,aL);if(aK.isSubscribed){aD.updateEventPoster(aL);}}}ah(aL,aM);aB.parentalRatingIcon.update(aL);aB.eventGenre.setText(aF.getEventGenre(aL));aB.eventDescription.setText(aF.getDescription(aL));N(aF.getProgressBarData(aL));g();am(true);if(ai.platform.system.Preferences.get(ai.app.constants.PARENTAL_ADULT_CONTENT)==="true"){aB.eventGenre.hide();aB.eventDescription.hide();}aJ(true);if(aF.getRecordingStatus(j.getEventObj(q.getSelectedItem()))===ai.platform.btv.PVRManager.TaskStatus.TASK_STATUS_UNSCHEDULED){an.indicator.RCUIcn.setText(Mosaic.getString("RCUKeyName"));}else{an.indicator.RCUIcn.setText(Mosaic.getString("RCUCancelKeyName"));}}else{w=0;am(false);if(ai.app.fullScreenPlayer.getSource()===aK.uri){ax=ai.app.fullScreenPlayer.getSource();if(!V){aD.hidePreviewArea();}}else{if(!ai.app.fullScreenPlayer.getSource()){aD.updatePreview(aK,aL);}else{aD.showPreviewArea();}}aD.setPoster("");an.eventTitle.show();an.eventTitleWithEpisode.hide();an.eventTitle.setText(Mosaic.getString("programInfoUnavailable"));aJ(false);an.indicator.RCUIcn.setText(Mosaic.getString("RCUKeyName"));}}ai.common.helper.FrontPanelManager.updateChannelNumber();}function at(){if(az){clearTimeout(az);az=null;}if(w!==0){if(new Date().getTime()>w){af();}else{aB.progressBar.setProgress(new Date().getTime());}}az=setTimeout(at,30000);}function av(aQ){var aM,aO=q.getData(),aN,aL,aP,aK=null;if(aQ){aK=ai.app.epgUtil.getNextClosestService(aQ,aO);if(aK){for(aM=0;aM<aO.length;aM++){if(aO[aM].logicalChannelNum===aK.logicalChannelNum){aN=Math.floor(aM/q.getItemsPerPage());aP=Math.floor((aM-aN*q.getItemsPerPage())/q.getColumnsPerPage())+1;aL=(aM-aN*q.getItemsPerPage())%q.getColumnsPerPage()+1;q.selectItemAtPosition(aP,aL,aN+1);return true;}}}}return false;}function t(){var aK=ai.app.genreUtil.getGenreTitle(aG);aq.reset();aq.show();aq.push(Mosaic.getString("title"));aq.push(aK);}function m(){aG=ai.app.genreUtil.GENRE_ALLCHANNELS;}function M(){var aK=null,aL;aK=ai.app.ChannelManager.getChannelListByGenreIndex(aG);q.setData(aK);if(aK.length>0){ar=false;if(!K||!ai.platform.btv.EPG.getChannelByServiceId(K)||!av(ai.platform.btv.EPG.getChannelByServiceId(K).logicalChannelNum)){q.selectItemAtPosition(1,1,1);ai.app.epgUtil.storeChannelToPrefs(q.getSelectedItem().serviceId);}an.noChannelMsg.hide();an.mosaicFavOK.okIcon.hide();f();}else{ar=true;an.noChannelMsg.setText(Mosaic.getString("noChannel"));an.mosaicFavOK.okIcon.setText(Mosaic.getString("addToFavourite"));an.mosaicFavOK.okIcon.show();an.noChannelMsg.show();an.OK.okIcn.hide();an.serviceName.hide();an.serviceNumber.hide();an.upArrow.hide();an.downArrow.hide();}q.displayData();t();}function Q(){ai.app.fullScreenPlayer.tuner.showScaled(897,190,320,180);}function Z(){ai.app.fullScreenPlayer.tuner.showFullscreen();}function ay(aK){switch(aK.streamDisabledInfo.reason){case o.CA_ACCESS_DENIED:case o.CA_ACCESS_BLACKED_OUT:case o.CA_NO_VALID_SECURE_DEVICE:e=false;if(q.getSelectedItem().uri===ai.app.fullScreenPlayer.getSource()){aD.setOpacity(1);n=q.getSelectedItem().uri;}if(aK.streamDisabledInfo.reason===o.CA_NO_VALID_SECURE_DEVICE){aI=false;aD.showSmartCardNotInsertedText();}else{aD.showUnsubscribeText();}if(L){L.cancelAnimation();}aj();break;}}function ak(){ai.app.AudioManager.unmute();ai.app.fullScreenPlayer.tuner.showVideo();}function F(){ak();}function G(){var aK=q.getSelectedItem(),aL=j.getEventObj(aK),aN=ai.app.ParentalControlUtil.isChannelOrProgramLocked(aL),aM=function(){aD.hidePreviewArea();};ak();if(aN){return;}if(!L){aD.addFadeAnimation();L=aD.getFadeAnimation();}if(q.getSelectedItem().uri!==ai.app.fullScreenPlayer.getSource()){i("playVideoSuccess, but Not the same service",q.getSelectedItem().uri+"===="+ai.app.fullScreenPlayer.getSource());return;}L.setAnimationEndCallback(aM);aD.doFade(0);e=true;aj();ax=ai.app.fullScreenPlayer.getSource();ai.app.fullScreenPlayer.tracks.activateAudioTrackByLanguage(ai.app.TracksUtil.getAudioLanguageFromPreferences());}function C(){var aL=q.getSelectedItem(),aM=j.getEventObj(aL),aK=null;n="";aI=true;aK=ai.platform.btv.EPG.getChannelByServiceId(aM.serviceId);k(aK,aM);}function u(){var aK=ai.app.epgUtil.getEvent("current",q.getSelectedItem().serviceId);i("lockStatusUpdate","Exit"+q.getSelectedItem().serviceId);}function aw(){var aK=q.getSelectedItem(),aL=j.getEventObj(aK),aM=ai.app.ParentalControlUtil.isChannelOrProgramLocked(aL);aD.setOpacity(1);aD.showPreviewArea();if(aM){aD.updatePreview(aK,aL);}}function O(){U=true;}function I(){U=false;if(q.getSelectedItem()&&(q.getSelectedItem().uri===ax)){aD.setOpacity(0);}}function aC(aK){if(aK.contentStartFailedInfo.reason===ai.app.constants.CA_PLAY_ERRORS.contentStartFailedReason.LACK_OF_RESOURCES){ai.app.AudioManager.mute();ai.app.fullScreenPlayer.tuner.hideVideo();if(!V){aD.setOpacity(1);aD.showNoResourcePoster();}}else{ak();}}function D(){ai.app.fullScreenPlayer.registerPlayerConnectedListener(G);ai.app.fullScreenPlayer.unregisterStreamDiabledListeners();ai.app.fullScreenPlayer.registerStreamDisabledListener(ay);ai.app.fullScreenPlayer.unregisterBlockedCallbacks();ai.app.fullScreenPlayer.registerLockerStatusUpdateListener(u);ai.app.fullScreenPlayer.registerLockerUnlockListener(G);window.parent.CCOM.ConditionalAccess.addEventListener("onSmartcardInserted",C);ai.app.fullScreenPlayer.unregisterConnectFailedListener();ai.app.fullScreenPlayer.registerPlayerConnectFailedListener(aC);ai.app.fullScreenPlayer.registerPlayerPlayingListener(F);ai.app.fullScreenPlayer.tuner.registerQosDegradedListener(O);ai.app.fullScreenPlayer.tuner.registerQosImprovedListener(I);ai.platform.btv.EPG.registerRefreshCallback(M,this);}function X(){ai.app.fullScreenPlayer.unregisterPlayerConnectedListener(G);ai.app.fullScreenPlayer.registerStreamDiabledListeners();ai.app.fullScreenPlayer.unregisterStreamDisabledListener(ay);ai.app.fullScreenPlayer.registerBlockedCallbacks();ai.app.fullScreenPlayer.unregisterLockerStatusUpdateListener(u);ai.app.fullScreenPlayer.unregisterLockerUnlockListener(G);window.parent.CCOM.ConditionalAccess.removeEventListener("onSmartcardInserted",C);ai.app.fullScreenPlayer.registerConnectFailedListener();ai.app.fullScreenPlayer.unregisterPlayerConnectFailedListener(aC);ai.app.fullScreenPlayer.unregisterPlayerPlayingListener(F);ai.app.fullScreenPlayer.tuner.unregisterQosDegradedListener(O);ai.app.fullScreenPlayer.tuner.unregisterQosImprovedListener(I);ai.platform.btv.EPG.unregisterRefreshCallback(M,this);}function P(){E.hideDialog();}function d(aL,aK){var aM=function(){E.hideDialog();};E.handlePinKeyPressCallback(aK,aM);}E=new ai.app.PinHelper(null,null,null,P,ai.app.constants.PIN_DIALOG_SHOW_TIME,false);function H(){var aL=q.getSelectedItem(),aK=ai.app.ParentalControlUtil.isChannelLocked(aL);E.setDialogProperties({x:0,y:0,width:1920,height:1080,id:"mosaicPinDialogId",title:aK?Mosaic.getString("channelLocked"):Mosaic.getString("programLocked"),description:aK?Mosaic.getString("unlockChannel"):Mosaic.getString("unlockShow"),keyPressedCallback:d});E.setAuthenticationSuccessCallback(function(){var aM=q.getSelectedItem();Z();aD.setScalePlayout(aM,j.getEventObj(aM),true);aL.showBanner=true;ai.app.ContextHelper.openContext("ZAPPER",{activationContext:aL});});E.showPinDialog("master",true);}function aa(){if(x.length===0){x=ai.app.PVRCapability.subscribeToPVRCapabilityEvent(s,s,Mosaic);}}function z(){x=ai.app.PVRCapability.unSubscribeFromPVRCapabilityEvent(x);}function Y(){var aM=ai.platform.btv.EPG.getChannelByServiceId(K),aK=q.getSelectedItem(),aL=j.getEventObj(aK);if(K&&aM){ai.app.epgUtil.storeChannelToPrefs(K);if(aL&&(K!==aL.serviceId)){aD.setScalePlayout(aM,j.getEventObj(aM),true);}ai.common.helper.FrontPanelManager.setFrontPanelDisplay(ai.app.constants.FRONTPANEL_DISPLAY_MODES.DEFAULT);}}function r(){var aK,aL;if(aG===ai.app.genreUtil.GENRE_FAVORITE){aG=ai.app.genreUtil.GENRE_ALLCHANNELS;}else{aG=ai.app.genreUtil.GENRE_FAVORITE;}M();aK=q.getSelectedItem();aL=j.getEventObj(aK);k(aK,aL);}function a(){if(!R){R=ai.apps.util.EventManager.subscribe("favouritesToggled",r,Mosaic);}}function ap(){if(R){ai.apps.util.EventManager.unSubscribe(R);R=null;ai.platform.system.Preferences.set(ai.app.constants.PREF_TV_CATEGORY,ai.app.constants.FAVOURITE_ALL_CHANNELS);}}return{load:function(){ai.gui.ResolutionManager.initialiseContext(document);ai.apps.core.Language.importLanguageBundleForObject(Mosaic,Mosaic.init,"apps/mosaic/common/","LanguageBundle.js",W,window);},init:function(){ai.gui.FrameworkCore.loadGUIFromXML("apps/mosaic/view/mosaic.xml",document.getElementById("content"),an,window);q=an.channelMosaic;aq=an.Mosaictitle;ai.app.GeneralUtil.mixin(j,ai.app.DataMappers.getServiceDataMapper());q.setDataMapper(j);q.setItemHighlightedCallback(function(){af();if(az){clearTimeout(az);az=null;}az=setTimeout(at,30000);});q.setListPagedCallback(function(){f();});q.setOrientation(ai.gui.AbstractCustomisableList.consts.ORIENTAION_HORIZONTAL);q.setVSpace(aH);q.setHSpace(ao);q.initialise();aB=an.eventInfo;W();ai.apps.core.ContextManager.initialisationComplete(Mosaic);aq.setParentLabelCss("breadcrumbTitle");aq.setChildLabelCss("breadcrumbSubTitle");an.mosaicFavOK.okIcon.setCssClassForLabel("addToFavTitle");},activate:function(aL){var aK=null,aM=null;ae=null;al(aL);Q();ax="";n="";aD=aB.previewArea;aD.configureComponents();D();aG=ai.app.genreUtil.GENRE_ALLCHANNELS;ai.app.BrandHelper.show(ai.app.BrandHelper.MOSAIC_BACKGROUND_ID);ai.app.ClockDisplay.show();ai.app.PVRUtil.registerUIRefreshListener(g,this);K=ai.app.epgUtil.getChannelFromPrefs();M();aK=q.getSelectedItem();aM=j.getEventObj(aK);if(az){clearTimeout(az);az=null;}az=setTimeout(at,30000);aa();ai.app.PVRCapability.subscribeWHPvrDeviceUpdate(s);ai.platform.btv.PVRManager.setRecordingRequestConflictsCallback(ai.app.Conflicts.onRecordingFailed);an.eventTitle.start();a();aD.setOpacity(0);},passivate:function(){ai.app.BrandHelper.hideAll();ai.app.ClockDisplay.hide();aG=0;if(az){clearTimeout(az);az=null;}ai.app.PVRUtil.unregisterUIRefreshListener(g);X();z();ai.app.PVRCapability.unSubscribeWHPvrDeviceUpdate(s);aD.clearPoster();aD.setCurrentEventId(null);Z();ai.app.TimerUtil.stopTimer("recordIcon");ai.platform.btv.PVRManager.setRecordingRequestConflictsCallback(function(){});ai.common.helper.FrontPanelManager.setFrontPanelDisplay(ai.app.constants.FRONTPANEL_DISPLAY_MODES.DEFAULT);an.eventTitle.stop();ap();},preview:function(){},dismissPreview:function(){},toString:function(){return"MOSAIC";},focus:function(){aE();D();Q();ai.app.BrandHelper.show(ai.app.BrandHelper.MOSAIC_BACKGROUND_ID);an.eventTitle.start();a();af();},defocus:function(){X();if(az){clearTimeout(az);az=null;}an.eventTitle.stop();Z();m();ap();},keyHandler:function(aN,aL){var aP=ai.apps.core.KeyInterceptor.getKeyMap(),aK=q.getSelectedItem(),aM=j.getEventObj(aK),aO="";ai.app.MemoryUtil.setOrUpdateGarbageCollectTimeoutAndInterval();if(aL){switch(aN){case aP.KEY_GUIDE:return true;}}switch(aN){case aP.KEY_OK:if(!ar&&e){if(ai.app.ParentalControlUtil.isChannelOrProgramLocked(aM)){H();}else{aO=ai.app.fullScreenPlayer.getSource();if(aO&&(aO.indexOf(aK.serviceId)===-1)&&ai.app.fullScreenPlayer.isPlayerConnectFailed()){aK=ai.app.epgUtil.getServiceById(aO.substring("tv://channel.".length));}Z();aK.showBanner=true;ai.app.ContextHelper.openContext("ZAPPER",{activationContext:aK});}k(aK,aM);ak();}if(ar){ai.app.FavouritesUtil.launchFavoritesApp();}return true;case aP.KEY_STOP:if(!ar){if(ai.app.EventUtil.isValidEvent(j.getEventObj(aK))){ai.app.PVRUtil.cancelEvent(j.getEventObj(aK),af);}}return true;case aP.KEY_RECORD:if(!ar&&aK.isSubscribed&&e&&ai.app.PVRUtil.isRecordable(aM,aK)){ai.app.PVRUtil.recordOrCancelEvent(aM,af);}return true;case aP.KEY_RED:case aP.KEY_INFO:if(!ar&&ai.app.EventUtil.isValidEvent(j.getEventObj(q.getSelectedItem()))){Z();ab();}return true;case aP.KEY_EXIT:case aP.KEY_BACK:Z();Y();ak();return false;case aP.KEY_GREEN:aG=aG+1>=ai.app.genreUtil.getAmountOfGenres()?0:aG+1;M();af();if(!q.getSelectedItem()||aK.serviceId!==q.getSelectedItem().serviceId){aw();}if(az){clearTimeout(az);az=null;}az=setTimeout(at,30000);return true;}switch(aN){case aP.KEY_UP:if(!q.isAtFirstPage()||(q.isAtFirstPage()&&!q.isSelectedItemAtFirstRow())){aw();}break;case aP.KEY_DOWN:if(!q.isAtLastPage()||(q.isAtLastPage()&&!q.isSelectedItemAtLastRow())){aw();}break;case aP.KEY_LEFT:if(q.getSelectedColumnIndex()!==1){aw();}break;case aP.KEY_RIGHT:if(q.getSelectedColumnIndex()!==q.getColumnsPerPage()||(q.isAtLastPage()&&(((q.getSelectedRowIndex()-1)*q.getColumnsPerPage()+q.getSelectedColumnIndex())!==q.getNumberOfItemsInCurrentPage()))){aw();}break;case aP.KEY_CHAN_UP:case aP.KEY_CHAN_DOWN:aw();break;case aP.KEY_HOME:case aP.KEY_MENU:case aP.KEY_GUIDE:case aP.KEY_AGORA:case aP.KEY_PPV:case aP.KEY_RADIO:case aP.KEY_VOD:Y();M();aw();ak();break;}switch(aN){case aP.KEY_UP+ac:case aP.KEY_DOWN+ac:case aP.KEY_LEFT+ac:case aP.KEY_RIGHT+ac:case aP.KEY_CHAN_UP+ac:case aP.KEY_CHAN_DOWN+ac:case aP.KEY_GREEN+ac:if(b){clearInterval(b);}b=setTimeout(function(){k(aK,aM);},c);break;}return q.keyHandler(aN);},PVRStatusUpdateListener:s,unsubscribeFromPVRStatusUpdateEvent:z,subscribeToPVRStatusUpdateEvent:aa};}());