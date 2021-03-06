var $N=window.parent.$N;$N.app.PortalWindow=(function(){var h=new $N.apps.core.Log("Portal","PortalWindow"),j={},g=function(){},l=false,a=null,m=null;function f(t){var s=null;switch(t){case"PVR":s=j.recordingsTable;break;case"music":s=j.musicTable;break;case"messages":s=j.messagesTable;break;case"settings":s=j.settingsTable;break;default:s=j.guideTable;break;}if(s){m=s;m.show();}}function e(s){if(s.data.startTime){j.recordingsItemLabel.setText($N.app.DateTimeUtil.getRecordedOnString(s.data.startTime)+".");}else{j.recordingsItemLabel.setText("");}j.recordingsItemLabel.show();}function r(s){g=s;}function o(s){j=s;j.addFadeAnimation();j.guideTable.initialise();j.guideTable.setDataMapper($N.app.DataMappers.getServiceDataMapper());j.recordingsTable.setItemHighlightedImmediateCallback(e);j.recordingsTable.initialise();j.recordingsTable.setDataMapper($N.app.DataMappers.getServiceDataMapper());j.musicTable.initialise();j.settingsTable.initialise();}function d(t,s){var u=null;if(s==="messages"){u=t?"":$N.app.PortalWindow.getString("noMail");j.messagesTable.setEmptyText(u);}if(s==="PVR"){u=t?"":$N.app.PortalWindow.getString("noRecordings");j.recordingsTable.setEmptyText(u);}}function n(s){var u=s.data,t=u&&u.items&&u.items.length;a=s.mode;j.recordingsItemLabel.hide();if(t||(a==="messages")||(a==="PVR")){d(t,a);f(a);if(m){m.preview(u);}j.setOpacity(0);j.show();j.doFade(1);}if(a==="guide"){$N.app.TimerUtil.startTimer();}l=true;}function c(s){if(!l){n(s);}if(m){m.activate();}}function p(){if(m){m.passivate();}j.recordingsItemLabel.hide();}function i(){j.hide();if(m){m.hide();}p();if(a==="guide"){$N.app.TimerUtil.stopTimer();}l=false;}function q(s){var t=$N.apps.core.KeyInterceptor.getKeyMap(),u=false;if(m){u=m.keyHandler(s);}if(!u){switch(s){case t.KEY_LEFT:case t.KEY_BACK:g();u=true;break;}}return u;}function b(s){if(m&&m.setData){m.setData(s);}}function k(){return m;}return{setExitCallback:r,initialise:o,preview:n,activate:c,passivate:p,unPreview:i,keyHandler:q,getCurrentTable:k,refreshData:b};}());$N.apps.core.Language.importLanguageBundleForObject($N.app.PortalWindow,null,"apps/portal/common/","LanguageBundle.js",null,window);(function(b){function a(d,c){a.superConstructor.call(this,d);this._container.configure({width:570});this._highlight.configure({width:570});this._mailTitle.configure({width:519});}b.gui.Util.extend(a,b.gui.MessageListItem);b.gui.MessagePromotionItem=a;}(window.parent.$N||{}));(function(a){function b(e,c){this._log=new a.apps.core.Log("CommonGUI","MusicPromotionItem");b.superConstructor.call(this,e);this._container=new a.gui.Group(e);this.index=null;this._highlight=new a.gui.Container(e,this._container);this._highlight.configure({x:0,y:0,width:381,height:178,cssClass:"dynamicTableHighlightSolid",rounding:1,visible:false});this._imageBg=new a.gui.CachedImage(this._docRef,this._container);this._imageIcon=new a.gui.CachedImage(this._docRef,this._container);this._title=new a.gui.Label(this._docRef,this._container);this._imageBg._innerElement.setAttribute("preserveAspectRatio","xMidYMid slice");this._imageIcon._innerElement.setAttribute("preserveAspectRatio","xMidYMid slice");this._DEFAULT_TEXT_PADDING_LEFT=16;this._imageBg.configure({x:3,y:3,width:375,height:173});this._imageIcon.configure({x:16,y:37,width:100,height:100});this._title.configure({x:83,y:155,height:40,cssClass:"musicPromotionItemTitle"});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}var d=this;this._imageBg.setLoadSuccessful(function(){d._imageBg.show();});this._imageBg.setLoadFailedCallback(function(){d._imageBg.hide();});this._imageIcon.setLoadSuccessful(function(){d._imageIcon.show();});this._imageIcon.setLoadFailedCallback(function(){d._imageIcon.hide();});}a.gui.Util.extend(b,a.gui.GUIObject);b.prototype.reset=function(){this._title.setText("");this._title.setWidth(this._width-this._DEFAULT_TEXT_PADDING_LEFT);this._highlight.configure({x:0,y:0,width:381,height:178,cssClass:"dynamicTableHighlightSolid",rounding:1,visible:false});};b.prototype.setWidth=function(c){this._width=c;this._container.setWidth(c);this._title.setWidth(c-this._title.getX());};b.prototype.setHeight=function(c){this._height=c;this._container.setHeight(c);};b.prototype.setHrefBg=function(c){this._imageBg.setHref(c);};b.prototype.setHref=function(c){};b.prototype.setText=function(c){this._title.setText(c);};b.prototype.highlight=function(){var c=this;c._highlight.setCssClass("dynamicTableHighlightSolid");c._highlight.show();};b.prototype.unHighlight=function(){this._highlight.setCssClass("portalColour");this._highlight.hide();};b.prototype.setCssClass=function(c){this._title.setCssClass(c);};b.prototype.keyHandler=function(c){var d=a.apps.core.KeyInterceptor.getKeyMap(),e=false;if(c===d.KEY_OK){if(!this._id){return false;}else{a.app.ContextHelper.openContext("MUSIC",{activationContext:{id:this._id,activeMode:"portal"}});}e=true;}return e;};a.gui=a.gui||{};a.gui.MusicPromotionItem=b;}(window.parent.$N||{}));(function(a){function b(e,c){this._log=new a.apps.core.Log("CommonGUI","PortalIconTextItem");b.superConstructor.call(this,e);this._container=new a.gui.Group(e);this.index=null;this._highlight=new a.gui.Container(e,this._container);this._highlight.configure({x:0,y:50,width:580.5,height:120,cssClass:"dynamicSettingsTableHighlightSolid",rounding:0,visible:false});this._image=new a.gui.CachedImage(this._docRef,this._container);this._title=new a.gui.Label(this._docRef,this._container);this._image._innerElement.setAttribute("preserveAspectRatio","xMidYMid slice");this._DEFAULT_TEXT_PADDING_LEFT=16;this._title.configure({height:26,cssClass:"promotionItemTitle"});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}var d=this;this._image.setLoadSuccessful(function(){d._image.show();});this._image.setLoadFailedCallback(function(){d._image.hide();});}a.gui.Util.extend(b,a.gui.GUIObject);b.prototype.reset=function(){this._title.setText("");this._title.setWidth(this._width-this._DEFAULT_TEXT_PADDING_LEFT);this._title.setX(this._DEFAULT_TEXT_PADDING_LEFT);};b.prototype.setWidth=function(c){this._width=c;this._container.setWidth(c);this._title.setWidth(c);this._image.setWidth(75);};b.prototype.setHeight=function(c){var d=this._highlight.getTrueY();this._height=c;this._container.setHeight(c);this._title.setHeight(60);this._image.setHeight(75);this._title.setY(d+70);this._image.setY(d+20);this._title.setX(130);this._image.setX(27);};b.prototype.setHref=function(c){this._image.setHref(c);};b.prototype.setText=function(c){this._title.setText(c);};b.prototype.highlight=function(){var c=this;c._highlight.setCssClass("dynamicSettingsTableHighlightSolid");c._highlight.show();};b.prototype.unHighlight=function(){this._highlight.setCssClass("portalColour");this._highlight.hide();};b.prototype.setCssClass=function(c){this._title.setCssClass(c);};b.prototype.keyHandler=function(c){var d=a.apps.core.KeyInterceptor.getKeyMap(),e=false;if(c===d.KEY_OK){if(!this._id){return false;}else{a.app.ContextHelper.openContext("SETTINGS",{activationContext:{id:this._id,isFromPortal:true}});}e=true;}return e;};a.gui=a.gui||{};a.gui.PortalIconTextItem=b;}(window.parent.$N||{}));(function(a){function b(d,c){b.superConstructor.call(this,d,c);a.apps.core.Language.adornWithGetString(b,"customise/resources/");this._eventId=null;this._gotoDVRLibrary=false;this._recordingObj=null;this._pinHelper=null;this._LOGO_SIZE=96;this._TITLE_X=120;this._ICON_PADDING=12;this._ICON_PADDING_RIGHT=4;this._channelLogo=new a.gui.ChannelLogo(this._docRef,this._container);this._eventDetails=new a.gui.Label(this._docRef,this._container);this._activeRecordIcon=new a.gui.ActiveRecordIcon(this._docRef,this._container);this._partialRecordIcon=new a.gui.PartialRecordIcon(this._docRef,this._container);this._scrollingTitle=new a.gui.DelayedScrollingLabel(this._docRef,this._container);this._channelLogo.configure({width:this._LOGO_SIZE,height:this._LOGO_SIZE});this._eventDetails.configure({x:this._TITLE_X,y:80,cssClass:"recordingPromotionItemEventDetails"});this._scrollingTitle.configure({x:this._TITLE_X,y:12,width:429,duration:"250ms",cssClass:"promotionItemTitle"});this._activeRecordIcon.configure({x:this._TITLE_X,y:5});this._partialRecordIcon.setY(60);this._backgroundGradient.configure({x:0,y:0,height:this._DEFAULT_GRADIENT_HEIGHT,cssClass:"portalHighlightUnderlay",visible:false});}a.gui.Util.extend(b,a.gui.PromotionItem);b.prototype.reset=function(){this._backgroundGradient.hide();this._channelLogo.hide();this._scrollingTitle.stop();this._eventDetails.setText("");};b.prototype._getTask=function(){var c=false;return a.platform.btv.PVRManager.getTask(this._taskId,a.platform.btv.PVRManager.WIDE_TASK_FIELD_FILTER,c);};b.prototype.setHeight=function(c){this._height=c;this._container.setHeight(c);this._image.setHeight(c);this._backgroundGradient.setHeight(c);};b.prototype.update=function(){};b.prototype._showEventInfo=function(){var c,d=a.platform.system.Preferences.get(a.app.constants.PREF_LANGUAGE);if(this._serviceId){c=a.platform.btv.EPG.getChannelByServiceId(this._serviceId)||{};if(this._gotoDVRLibrary){this._channelLogo.update(c,a.app.constants.NET_IMAGES_PATH+"dvr_menu_"+d+".png");this._channelLogo.show();}else{if(c){this._channelLogo.update(c);this._channelLogo.show();}else{this._channelLogo.hide();}}this._scrollingTitle.setX(this._TITLE_X);this._scrollingTitle.setWidth(this._width-this._TITLE_X-this._DEFAULT_TEXT_PADDING_LEFT);this._eventDetails.setX(this._TITLE_X);this._eventDetails.setWidth(this._width-this._TITLE_X);}else{this._scrollingTitle.setWidth(this._width-this._DEFAULT_TEXT_PADDING_LEFT);this._scrollingTitle.setX(this._DEFAULT_TEXT_PADDING_LEFT);this._eventDetails.setWidth(this._width-this._DEFAULT_TEXT_PADDING_LEFT);this._eventDetails.setX(this._DEFAULT_TEXT_PADDING_LEFT);}};b.prototype._updateRecordIcon=function(d){var c=null;if(this._taskId){c=this._getTask();this._activeRecordIcon.updateByTask(c);this._partialRecordIcon.updateByTask(c);}else{this._activeRecordIcon.hide();this._partialRecordIcon.hide();}};b.prototype._repositionTitleComponents=function(){var c,d=this._DEFAULT_TEXT_PADDING_LEFT;if(this._activeRecordIcon.isVisible()){d=this._ICON_PADDING+this._activeRecordIcon.getTrueWidth()+this._ICON_PADDING_RIGHT;}this._scrollingTitle.setWidth(this._width-(this._scrollingTitle.getTrueX()+d));c=this._scrollingTitle.getTrueX()+Math.min(this._scrollingTitle.getTrueWidth(),this._scrollingTitle.getTrueTextLength())+this._ICON_PADDING;if(c>0){this._activeRecordIcon.setX(c);}};b.prototype._repositionEventDetailsComponents=function(){var c,d=(this._partialRecordIcon.isVisible())?this._ICON_PADDING+this._partialRecordIcon.getTrueWidth():0;this._eventDetails.setWidth(this._width-(this._eventDetails.getTrueX()+d));c=this._eventDetails.getTrueTextLength();if(c>0){this._partialRecordIcon.setX(this._eventDetails.getTrueX()+c+this._ICON_PADDING);}else{this._partialRecordIcon.setX(this._eventDetails.getTrueX());}};b.prototype.setGotoDVRLibrary=function(c){this._gotoDVRLibrary=c;};b.prototype.setServiceId=function(c){this._serviceId=c;};b.prototype.setEventId=function(c){this._eventId=c;this._showEventInfo();};b.prototype.setTaskId=function(c){this._taskId=c;};b.prototype.setStartTime=function(c){this._startTime=c;};b.prototype.setText=function(c){this._scrollingTitle.setText(c,true);this._updateRecordIcon(this._eventId);this._repositionTitleComponents();};b.prototype.highlight=function(){this._backgroundGradient.show();this._scrollingTitle.start();};b.prototype.unHighlight=function(){this._backgroundGradient.hide();this._scrollingTitle.stop();};b.prototype.setEventDetails=function(c){this._eventDetails.setText(c);this._repositionEventDetailsComponents();};b.prototype.setRecordingObj=function(c){this._recordingObj=c;};b.prototype._playVideo=function(){var f=this._getTask(),i=a.apps.util.Util.formatDate(new Date(f.startTime),"dd/mm"),c=a.app.epgUtil.getChannelLogoUrl(f.serviceId),h=a.app.PVRUtil.getVideoConfig(this._scrollingTitle.getText()+this._eventDetails.getText(),"",0,i,c,f),j,l,e,g,d,k;h.dontRestartStream=false;h.atEndOfPlayBack=false;h.playingEvent=f;if(f.bookmark){j=1;l=this;e=2;g=[{name:b.getString("resumeRecordingDialogueWatch"),action:j},{name:b.getString("resumeRecordingDialogueRestart"),action:e}];d=function(m){if(m&&(m.action===e||m.action===j)){if(m.action===e){a.platform.btv.PVRManager.saveBookmark({taskId:l._taskId},0,0);h.clearBookmark=true;}a.app.ContextHelper.openContext("MEDIAPLAYER",{activationContext:h});}};k=new a.apps.dialog.ConfirmationDialogue("ResumeRecordingDialog",this._scrollingTitle.getText()+" "+this._eventDetails.getText(),b.getString("resumeRecordingDialogueSubTitle"),g,d,null,null,"VERTICAL");k.customise({defaultButton:j});a.app.DialogueHelper.displayDialogue(k,a.app.constants.DLG_PORTAL_RESUME_RECORDING);}else{a.app.ContextHelper.openContext("MEDIAPLAYER",{activationContext:h});}};b.prototype._pinKeyPressCallback=function(e,c){var d=this,f=function(){if(d._pinHelper){d._pinHelper.hideDialog();}};if(this._pinHelper){this._pinHelper.handlePinKeyPressCallback(c,f);}};b.prototype._pinCancelledCallback=function(){if(this._pinHelper){this._pinHelper.hideDialog();}};b.prototype._checkRatingAndShowSynopsis=function(e){var d=this._getTask(),c=function(f){a.app.PVRUtil.navigateToSynopsis(f);};if(a.app.PVRUtil.isTaskBlockedSynopsis(d)){a.app.ParentalControlUtil.parentalDialog(d,c,this._pinCancelledCallback,this._pinKeyPressCallback);}else{a.app.PVRUtil.navigateToSynopsis(e);}};b.prototype._checkRatingAndPlayVideo=function(){var e=this._getTask(),h=this,i=[{name:"OK",action:1}],c=function(j){h._playVideo(j);},g,d,f;if(a.platform.btv.PVRManager.getTaskAuthorizationStatus(e)){g=a.app.ManualRecordingHelper.isManualRecordingTask(e);d=a.app.PVRUtil.isTaskBlockedPlaying(e);f=a.app.PVRUtil.isTaskBlocked(e);if(!g&&(d||f)){a.app.ParentalControlUtil.parentalDialog(e,c,this._pinCancelledCallback,this._pinKeyPressCallback);}else{this._playVideo();}}else{a.app.DialogueHelper.createAndShowDialogue(a.app.constants.DLG_UNAUTHORISED_RECORDING,b.getString("unauthorizedRecordingTitle"),b.getString("unauthorizedRecordingText"),i);}};b.prototype._cancelRecording=function(){if(a.platform.btv.PVRManager.isTaskRecordingNow(this._taskId)){a.app.PVRUtil.cancelTask(this._recordingObj);}};b.prototype.keyHandler=function(c){var d=a.apps.core.KeyInterceptor.getKeyMap(),e=false;switch(c){case d.KEY_OK:if(this._gotoDVRLibrary){a.app.ContextHelper.openContext("LIBRARY");}else{this._checkRatingAndPlayVideo();}e=true;break;case d.KEY_PLAY_PAUSE:this._checkRatingAndPlayVideo();e=true;break;case d.KEY_RED:case d.KEY_INFO:if(this._recordingObj){this._checkRatingAndShowSynopsis(this._recordingObj);}e=true;break;case d.KEY_STOP:this._cancelRecording();e=true;break;}return e;};b.prototype.setDataMapper=function(c){this._channelLogo.setDataMapper(c);};a.gui=a.gui||{};a.gui.RecordingPromotionItem=b;}(window.parent.$N||{}));var $N=window.parent.$N;(function(b){var a=function(e,c){var d=this;a.superConstructor.call(this,e);this._messageStatusChangedListenerId=b.apps.util.EventManager.subscribe("oneMailRead",this.messageStatusChangedListener,this);this._container=new b.gui.Group(this._docRef);this._list=new b.gui.PageableListWithArrows(this._docRef,this._container);this._textGroup=new b.gui.Group(this._docRef,this._container);this._textBackground=new b.gui.BackgroundBox(this._docRef,this._textGroup);this._text=new b.gui.TextArea(this._docRef,this._textGroup);this._noMailMessage=new b.gui.Label(this._docRef,this._container);this._list.configure({x:0,y:54.5,itemHeight:117,itemTemplate:b.gui.MessagePromotionItem,visibleItemCount:4,dataMapper:b.app.DataMappers.getMessageMails(),ItemHighlightedImmediateCallback:function(g){var f=d._list.getDataMapper();if(!d._textGroup.isVisible()){d._textGroup.show();}d._text.setText(f.getMailContent(g));},upArrowProperties:{x:537,y:-27},downArrowProperties:{x:537,y:478}});this._list.initialise();this._noMailMessage.configure({x:588,y:288,alignment:"centre",cssClass:"noMailText",visible:false});this._textGroup.configure({x:595.5,y:2.5,visible:false});this._textBackground.configure({width:576,height:576,cssClass:"recordingsWindowBackgroundPassivated"});this._text.configure({x:25.5,y:72,width:525,height:508,cssClass:"textContentDescription"});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}};b.gui.Util.extend(a,b.gui.GUIObject);a.prototype.messageStatusChangedListener=function(c){var e=this._list.getData(),d,f;if(e&&e.length){f=c.data;for(d=0;d<e.length;d++){if(f===this._list.getDataMapper().getMailId(e[d])){this._list.getDataMapper().setMailReadStatus(e[d]);this._list.visibleItemUpdate(d);}}}};a.prototype.setEmptyText=function(c){this._noMailMessage.setText(c);};a.prototype.preview=function(c){if(c){this._noMailMessage.hide();this._list.show();this._list.setData(c);this._list.displayData();}else{this._list.hide();this._textGroup.hide();this._noMailMessage.show();}};a.prototype.activate=function(){var c=this;this._list.focus();};a.prototype.passivate=function(){this._list.defocus();};a.prototype.keyHandler=function(c){return this._list.keyHandler(c);};a.prototype.getController=function(){return false;};b.gui.PortalMessages=a;}($N||{}));var Portal=(function(y){var l=new y.apps.core.Log("Portal","Portal"),d={},U=null,K=[],D=[],Q=null,T=null,A={getTitle:function(Z){return Portal.getString(Z.title);},getLogo:function(Z){return Z.logo;},getLogoHighlight:function(Z){return Z.logoHighlight;},getLogoIndicator:function(Z){if(Z.logoIndicator){if(Z.title==="menuMessages"&&y.app.MessageUtil.hasMessageMailUnread()){return Z.logoIndicator;}}return null;},getLogoIndicatorHighlight:function(Z){if(Z.logoIndicatorHighlight){if(Z.title==="menuMessages"&&y.app.MessageUtil.hasMessageMailUnread()){return Z.logoIndicatorHighlight;}}return null;}},k=null,b=false,c=null,F="",h=null,L=false,X=null,n=3000;function Y(){return(y.app.FeatureManager.getMediaPlaybackFeatureStatus()&&(y.app.DlnaHelper.getAvailableDevices().length>0)?true:false);}function f(){return y.app.PVRCapability.isPVREnabled(true);}k=[{title:"menuWatchTV",context:"ZAPPER",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"tv"}},logo:"../../../customise/resources/images/net/menu_portal_assistirtv_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_assistirtv_w.png"},{title:"menuNow",active:y.app.FeatureManager.isVODEnabled,context:"NOW",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"NOW"}},logo:"../../../customise/resources/images/net/menu_portal_now_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_now_w.png"},{title:"menuTVGuide",context:"LISTGUIDE",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"guide"}},logo:"../../../customise/resources/images/net/menu_portal_guia_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_guia_w.png"},{title:"menuDVR",active:f,context:"LIBRARY",itemHandlerData:{getData:y.app.PortalUtil.getWindowDataForRecordings,activationObject:{mode:"PVR"},refreshOnFocus:true},logo:"../../../customise/resources/images/net/menu_portal_gravador_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_gravador_w.png"},{title:"menuUSBPlayback",active:y.app.UsbBrowserHelper.getMediaPlaybackStatus,context:"MEDIABROWSER",itemHandlerData:{getData:null,activationObject:{mode:"UsbMediaPlayback",helper:y.app.UsbBrowserHelper}},logo:"../../../customise/resources/images/net/usb_blue.png",logoHighlight:"../../../customise/resources/images/net/usb.png"},{title:"menuMusic",context:"MUSIC",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"music"}},logo:"../../../customise/resources/images/net/menu_portal_musica_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_musica_w.png"},{title:"menuMessages",context:"MESSAGES",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"messages",id:"portalMenuMessages"}},logo:"../../../customise/resources/images/net/menu_portal_msg_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_msg_w.png",logoIndicator:"../../../customise/resources/images/net/new_msg_blue.png",logoIndicatorHighlight:"../../../customise/resources/images/net/new_msg_white.png"},{title:"menuSettings",context:"SETTINGS",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"settings"}},logo:"../../../customise/resources/images/net/menu_portal_config_b.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_config_w.png"},{title:"menuSearch",context:"SEARCH",itemHandlerData:{getData:y.app.PortalUtil.getWindowData,activationObject:{mode:"search"}},logo:"../../../customise/resources/images/net/menu_portal_busca_unfocus.png",logoHighlight:"../../../customise/resources/images/net/menu_portal_busca_focus.png"},{title:"menuHomeNetwork",active:Y,context:"MEDIABROWSER",itemHandlerData:{getData:null,activationObject:{mode:"dlna",helper:y.app.DlnaHelper}},logo:"../../../customise/resources/images/net/network_blue.png",logoHighlight:"../../../customise/resources/images/net/network.png"}];function g(){return k.filter(function(Z){return(!Z.active||Z.active());});}function J(aa){var Z,ab=U.getData();for(Z=0;Z<ab.length;Z++){if(aa===ab[Z].context){return Z;}}return 0;}function q(ac){var aa,ab=U.getData(),Z=ab.length;for(aa=0;aa<Z;aa++){if(ab[aa].context&&ab[aa].context===ac){return aa;}}return null;}function B(){U.setData(g());}function S(Z){U.displayData(true,true);}function E(){if(!Q){Q=y.apps.util.EventManager.subscribe("allMailsRead",S,this);}}function P(){if(Q){y.apps.util.EventManager.unSubscribe(Q);Q=null;}}function v(){var Z=U.getSelectedItem(),aa;if(Z&&Z.itemHandlerData.refreshOnFocus){aa=Z.itemHandlerData.activationObject.mode;Z.itemHandlerData.getData(aa,function(ab){if(ab&&y.apps.core.ContextManager.getActiveContext().getId()==="PORTAL"){c.refreshData(ab);}});}}function i(){window.parent.CCOM.Scheduler.addEventListener("onTasksChanged",v);}function C(){window.parent.CCOM.Scheduler.removeEventListener("onTasksChanged",v,false);}function s(Z){var aa=0;for(aa=0;aa<k.length;aa++){if(Z===k[aa].title){return aa;}}return -1;}function w(ab,ac,aa){var Z;if(ab){Z={mode:ab.itemHandlerData.activationObject.mode};c.unPreview();if(ab.itemHandlerData.getData){ab.itemHandlerData.getData(Z.mode,function(ad){if(ad){Z.data=ad;if(ac){U.defocus();c.preview(Z);b=true;if(aa!==null){c.getCurrentTable().setRootCellIndex(aa);}c.activate(Z);}else{c.preview(Z);}}});}}}function N(Z){var ab=f(),aa;if(!ab&&!y.app.FeatureManager.isVODEnabled()){aa=Z-1;}else{if(!ab||!y.app.FeatureManager.isVODEnabled()){aa=Z;}else{aa=Z+1;}}return aa;}function M(){var ab=s("menuDVR"),Z=0,ag=0,aa=null,ae=c.getCurrentTable(),ad=U.getSelectedItem(),ac=(ad)?ad.title:null,af;if(ae&&ae.getController()){aa=ae.getController().getSelectedCellIndex();}if(ab!==-1){k[ab].active=f;k[ab].context="LIBRARY";}af=g();af.some(function(ai,ah){if(ai.itemHandlerData.activationObject.mode===T){Z=ah;return true;}});if(ac==="menuUSBPlayback"||ac==="menuHomeNetwork"){Z=0;T=null;}ag=Z+1;U.setData(af);U.selectItemAtIndex(ag);U.displayData(false,true);if(!ac||ac!==U.getSelectedItem().title){if(b){w(af[Z],true,aa);}else{w(af[Z],false);}}}function W(Z){M();}function I(){if(K.length===0){K=y.app.PVRCapability.subscribeToPVRCapabilityEvent(W,W,Portal);}}function u(){K=y.app.PVRCapability.unSubscribeFromPVRCapabilityEvent(K);}function V(Z){var aa=s("menuUSBPlayback");k[aa].active=y.app.UsbBrowserHelper.getMediaPlaybackStatus;M();}function x(){if(D.length===0){D=y.app.UsbBrowserHelper.subscribeToUsbMediaPlaybackEvent(V,V,Portal);}}function e(){D=y.app.UsbBrowserHelper.unSubscribeToUsbMediaPlaybackEvent(D);}function z(Z){c.unPreview();}function p(ab){var Z=U._data.isAtFirstPage(),aa=U._data.isAtLastPage();if(U.getSize()>U.getVisibleItemCount()){if(!Z&&!aa){ab.upArrow.show();ab.downArrow.show();}else{if(Z){ab.downArrow.show();ab.upArrow.hide();}else{if(aa){ab.downArrow.hide();ab.upArrow.show();}}}ab.show();}else{ab.hide();}}function j(ab){var Z={},aa=d.scrollIndicator;T=ab.itemHandlerData.activationObject.mode;if(ab.itemHandlerData.getData){Z.mode=ab.itemHandlerData.activationObject.mode;ab.itemHandlerData.getData(Z.mode,function(ad,ae,ac){if(ac||(ae===T&&ad)){Z.data=ad;c.preview(Z);}});}if(aa){p(aa);}}function O(aa){var Z={mode:"dlna",helper:y.app.DlnaHelper};if(aa){y.app.DlnaHelper.setDeviceParameters(aa);y.app.ContextHelper.openContext("MEDIABROWSER",{activationContext:Z});y.app.DlnaHelper.hideDlnaDeviceListDialog();}}function H(ab,aa){var Z;if(!aa){Z={mode:ab.itemHandlerData.activationObject.mode};if(ab.itemHandlerData.getData){ab.itemHandlerData.getData(Z.mode,function(ac){if(ac){Z.data=ac;U.defocus();c.activate(Z);b=true;}});}}else{if(ab&&ab.context){switch(ab.context){case"MESSAGES":return;case"ZAPPER":y.app.ContextHelper.openContext("ZAPPER",{activationContext:{showBanner:true}});return;case"MUSIC":Z={activeMode:"portal"};break;case"SEARCH":Z={confirmLeftExit:true};break;case"SETTINGS":Z={id:ab.itemHandlerData.activationObject.id,isFromPortal:true};break;case"MEDIABROWSER":Z=ab.itemHandlerData.activationObject;if(Z.mode==="dlna"){y.app.DlnaHelper.showDeviceList(O,Portal.getString("dlnaPopUpTitle"),Portal.getString("dlnaPopUpMessage"));return;}break;}y.app.ContextHelper.openContext(ab.context,{activationContext:Z});}}}function R(){if(h){clearTimeout(h);}h=null;}function o(){R();h=setTimeout(function(){F="";R();},y.app.constants.CHANNEL_ENTRY_TIMEOUT_MS);}function r(Z){if(F.length<4){F+=Z;}if(F.length===4){if(F===y.app.Config.getConfigValue("first.install.pin")){y.app.ContextHelper.openContext("FIRSTINSTALL");}else{F="";}}o();}function t(ab){var aa=null,Z=null;if(Z){clearTimeout(Z);}Z=setTimeout(function(){aa=s("menuHomeNetwork");k[aa].active=Y;M();Z=null;},n);}function G(){y.app.DlnaHelper.registerGetDevicesOkEvent(t);}function m(){if(!X){X=y.apps.util.EventManager.subscribe("MediaPlaybackFeatureStatusUpdated",V,this);}}function a(){if(X){y.apps.util.EventManager.unSubscribe(X);X=null;}}return{load:function(){y.gui.ResolutionManager.initialiseContext(document);y.apps.core.Language.importLanguageBundleForObject(Portal,Portal.init,"apps/portal/common/","LanguageBundle.js",null,window);},init:function(){y.gui.FrameworkCore.loadGUIFromXML("apps/portal/view/portal.xml",document.getElementById("content"),d,window);U=d.menuList;U.setDataMapper(A);U.setItemHighlightedImmediateCallback(z);U.setItemHighlightedCallback(j);U.setItemSelectedCallback(H);U.initialise();I();x();c=y.app.PortalWindow;c.setExitCallback(function(){c.passivate();U.focus();b=false;});c.initialise(d.portalWindow);y.apps.util.EventManager.subscribe("menuLanguageChanged",M,this);y.apps.core.ContextManager.initialisationComplete(Portal);L=(y.app.Config.getConfigValue("usageid.manual.override")==="true");},activate:function(Z){B();if(b){c.passivate();U.focus();b=false;}y.app.BrandHelper.show(y.app.BrandHelper.AGORA_BACKGROUND_ID);if(Z&&Z.context){U.selectItemAtIndex(J(Z.context)+1);}else{U.selectItemAtIndex(1);}U.displayData();y.app.ClockDisplay.show();E();i();G();m();},passivate:function(){this.defocus();P();C();a();y.app.BrandHelper.hideAll();y.app.ClockDisplay.hide();},focus:function(){y.app.BrandHelper.show(y.app.BrandHelper.AGORA_BACKGROUND_ID);y.app.ClockDisplay.show();v();},defocus:function(){if(b){c.passivate();U.focus();b=false;}},toString:function(){return"PORTAL";},keyHandler:function(aa,Z){var ab=y.apps.core.KeyInterceptor.getKeyMap(),ac=false;y.app.MemoryUtil.setOrUpdateGarbageCollectTimeoutAndInterval();if(L){y.app.FeatureManager.enableFeature(aa);}if(b){ac=c.keyHandler(aa);}else{ac=U.keyHandler(aa);}if(!ac){switch(aa){case ab.KEY_MENU:F="";o();break;case ab.KEY_ZERO:case ab.KEY_ONE:case ab.KEY_TWO:case ab.KEY_THREE:case ab.KEY_FOUR:case ab.KEY_FIVE:case ab.KEY_SIX:case ab.KEY_SEVEN:case ab.KEY_EIGHT:case ab.KEY_NINE:if(h){r(aa);}else{y.app.ContextHelper.openContext("ZAPPER",{activationContext:{keyHandlerKey:aa,showBanner:true,isDirectChannelEntryFromPortal:true}});}ac=true;break;case ab.KEY_LEFT:y.app.ContextHelper.exitContext();ac=true;break;case ab.KEY_CHAN_UP:case ab.KEY_CHAN_DOWN:y.app.ContextHelper.openContext("ZAPPER",{activationContext:{keyHandlerKey:aa,showBanner:true}});ac=true;break;}}return ac;}};}(window.parent.$N));