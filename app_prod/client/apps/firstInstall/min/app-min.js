var FirstInstall=(function(q){var f=new q.apps.core.Log("FirstInstall","FirstInstall"),a={},B=null,g=null,J=null,h=null,y=null,m=null,s=null,N=null,j=null,I=null,G=null,A=false,e=5,M=null,H=200,r={getTitle:function(O){return FirstInstall.getString(O.name);}},E,u=q.app.ConditionalAccessCAK73.getCASystemInfo(),v=q.app.ConditionalAccessCAK73.getCASmartCardInfo(),K=null,k=[{name:q.app.DialogueHelper.getString("no"),action:q.app.constants.NO_OPTION},{name:q.app.DialogueHelper.getString("yes"),action:q.app.constants.YES_OPTION}];function x(){y.setText(FirstInstall.getString("channelSetup"));var P=q.common.helper.ScanManager.getNetworkConfig(),O=[{title:FirstInstall.getString("networkId"),key:"networkId",subtitle:P.networkId},{title:FirstInstall.getString("frequency")+" (kHz)",key:"frequency",subtitle:P.frequency},{title:FirstInstall.getString("symbolRate")+" (kbaud)",key:"symbolRate",subtitle:P.symbolRate},{title:FirstInstall.getString("modulation"),key:"modulation",subtitle:q.app.DVBScanUtil.getModulationType(P.modulation)}];m.preview(O);}function n(){var Q=q.app.constants,S=q.app.ConditionalAccessCAK73.getCASmartCardInfo(),R=CCOM.DRM.getDrmInfo(CCOM.DRM.DRM_TYPE_PRM),P=u.systemInfo.chipsetType,T=u.systemInfo.chipsetRevision,O=FirstInstall.getString("cakRevision");y.setText(FirstInstall.getString("decoderInfo"));s.preview([{key:FirstInstall.getString("stbModelNo"),value:CCOM.System.getStringById(Q.SYSTEM_STB_MODEL).string||E},{key:FirstInstall.getString("firmWareVersion"),value:q.app.SettingsAPI.getVersion()||E},{key:FirstInstall.getString("appVersion"),value:q.app.Version.app_version||E},{key:FirstInstall.getString("updateID"),value:q.app.FeatureManager.getUsageId()||E},{key:FirstInstall.getString("decodeCAID"),value:u.systemInfo.serialNumber||E},{key:FirstInstall.getString("smartCardNumber"),value:S.smartcardInfo?S.smartcardInfo.serialNumber||E:E},{key:FirstInstall.getString("smartCardSoftware"),value:S.smartcardInfo?S.smartcardInfo.version||E:E},{key:FirstInstall.getString("stbSerial"),value:CCOM.System.getStringById(Q.SYSTEM_STB_SERIAL_NUMBER).string||E},{key:FirstInstall.getString("cakVersion"),value:u.systemInfo.version||E},{key:FirstInstall.getString("caNuid"),value:u.systemInfo.nuid||E},{key:FirstInstall.getString("chipsetType"),value:(P+" ("+O+" "+T+")")||E},{key:FirstInstall.getString("projectInfo"),value:u.systemInfo.projectInformation||E},{key:FirstInstall.getString("dvlVersion"),value:(R&&R.drm&&R.drm.version)?R.drm.version:E},{key:FirstInstall.getString("CSCMaxIndex"),value:(typeof(u.systemInfo.cscMaxIndex)!=="null")?parseInt(u.systemInfo.cscMaxIndex,10):E}]);}function t(){y.setText(FirstInstall.getString("factoryReset"));j.setMessagePopup(I);j.preview([{title:FirstInstall.getString("factoryReset")}]);}function F(){var U=navigator.userAgent.indexOf("Ekioh")>-1?"svg":"html",S=FirstInstall.mode==="html"?null:window.parent.CCOM.IpNetwork.cableModem[0],X=FirstInstall.getString("ipConnected"),P=FirstInstall.getString("ipDisconnected"),Q=q.platform.system.Network,T=Q.getDnsServers(),R=Q.isEthernetAvailable(),V=0,W=1,O=[{key:FirstInstall.getString("decoderIP"),value:R?Q.getIpAddress():E},{key:FirstInstall.getString("dns"),value:R?(T[V]||T[W]):E},{key:FirstInstall.getString("macAddress"),value:(S&&S.macAddressExternal)?S.macAddressExternal:E},{key:FirstInstall.getString("txPowerLevel"),value:(S&&S.usPower)?S.usPower:E},{key:FirstInstall.getString("rxPowerLevel"),value:(S&&S.dsPower)?S.dsPower:E},{key:FirstInstall.getString("SNR"),value:(S&&S.snr)?S.snr:E},{key:FirstInstall.getString("status"),value:(S&&S.connectedToCMTS)?X:P},{key:FirstInstall.getString("ipMask"),value:R?Q.getSubnetMask():E},{key:FirstInstall.getString("gatewayIP"),value:R?Q.getGateway():E},{key:FirstInstall.getString("macStb"),value:Q.getMacAddress()||E},{key:FirstInstall.getString("ipStb"),value:(S&&S.ipAddressExternal)?S.ipAddressExternal:E}];return O;}function p(){var U=navigator.userAgent.indexOf("Ekioh")>-1?"svg":"html",S=FirstInstall.mode==="html"?null:window.parent.CCOM.IpNetwork.cableModem[0],X=FirstInstall.getString("ipConnected"),P=FirstInstall.getString("ipDisconnected"),Q=q.platform.system.Network,T=Q.getDnsServers(),R=Q.isEthernetAvailable(),V=0,O=F(),W=1;y.setText(FirstInstall.getString("IPStatus"));N.preview(O);}function o(){y.setText(FirstInstall.getString("exit"));}function i(){return[{name:"channels"},{name:"IPStatus"},{name:"decoderInfo"},{name:"factoryReset"},{name:"exit"}];}function w(){A=true;h.show();y.show();J.setData(i());J.displayData();J.focus();if(q.app.PVRUtil.isRecordingsActive()){q.app.DialogueHelper.createAndShowDialogue(q.app.constants.DLG_FACTORY_RESET_RECORDING,q.app.DialogueHelper.getString("warning"),FirstInstall.getString("recordingWarningMessage"));}else{if(q.app.PVRUtil.isRecordingsScheduled()){q.app.DialogueHelper.createAndShowDialogue(q.app.constants.DLG_FACTORY_RESET_SCHEDULED,q.app.DialogueHelper.getString("warning"),FirstInstall.getString("futureRecordingWarningMessage"));}}}function C(){if(K===null){K=new q.app.PinHelper(w,null,null,null,0,true);}q.apps.dialog.PinDialog.GUITemplateObject=q.gui.PinDialog;K.setDialogProperties({x:0,y:0,width:1920,height:1080,id:"firstInstall",title:FirstInstall.getString("installation"),description:FirstInstall.getString("enterInstallPassword"),eventImageVisibility:false,leftArrowVisibility:(q.platform.system.Preferences.get(q.app.constants.PREF_ISINSTALLED)==="true")?true:false,cancelCallback:function(){K.hideDialog();if(q.platform.system.Preferences.get(q.app.constants.PREF_ISINSTALLED)==="true"){q.app.ContextHelper.closeContext();}else{if(A===false){C();}}}});K.setAuthenticationSuccessCallback(w);K.showPinDialog("install",true,null,true);}function b(P){var O=q.app.genreUtil.getAllChannelsByGenre(q.app.genreUtil.GENRE_ADULT);if(!P||(P.action!==q.app.constants.YES_OPTION)){return;}q.platform.ca.ParentalControl.initialise();q.platform.ca.PINHandler.init();q.platform.ca.PINHandler.validateParentalPin(q.app.constants.DEFAULT_PARENTAL_PIN,function(){q.app.ChannelManager.addMultipleChannelsToBlockedList(O);},true);m.passivate();if(q.platform.system.Preferences.get(q.app.constants.PREF_ISINSTALLED)==="true"){q.app.ContextHelper.openContext("ZAPPER");}else{if(m.getChannelScanResult()){g=I;I.setBlockUI(true);I.setMessage(FirstInstall.getString("exitMessage"));setTimeout(function(){window.parent.Launch.finaliseInstallation();},1);}else{if(q.platform.system.Preferences.get(q.app.constants.PREF_ISINSTALLED)!=="true"){C();}}}}function L(){F();}function D(){if(M){clearInterval(M);M=null;}M=setInterval(L,H);}function c(){clearInterval(M);M=null;}function l(S){var O,Q,P,R=a.wizard[S];Q=a.wizard._children.length;if(B){B.hide();}for(O=0;O<Q;O++){P=a.wizard._children[O];if(P===R){B=P;break;}}}function d(O){l(O.name);a.settingsBGLines.hide();c();switch(O.name){case"channels":x();break;case"IPStatus":p();a.settingsBGLines.show();D();break;case"decoderInfo":n();a.settingsBGLines.show();break;case"factoryReset":t();break;case"exit":o();break;}}function z(P){var O;var Q=function(){g=J;};if(P.name==="exit"){O=q.app.DialogueHelper.createAndShowDialogue(q.app.constants.DLG_CONFIRM_LEAVE_INSTALLER,undefined,undefined,FirstInstall.dialogButtons);O.setSelectedCallback(FirstInstall.exit);}else{g=B;B.activate();B.setExitCallback(Q);}}return{load:function(){q.gui.ResolutionManager.initialiseContext(document);q.apps.core.Language.importLanguageBundleForObject(FirstInstall,FirstInstall.onLoaded,"apps/firstInstall/common/","LanguageBundle.js",FirstInstall.onLanguageChanged,window);},onLanguageChanged:function(){m.onLanguageChanged();},onLoaded:function(){q.gui.FrameworkCore.loadGUIFromXML("apps/firstInstall/view/firstInstall.xml",document.getElementById("content"),a,window);J=a.menu;h=a.netLogo;y=a.title;m=a.wizard.channels;s=a.wizard.decoderInfo;j=a.wizard.factoryReset;N=a.wizard.IPStatus;I=a.exit;J.setDataMapper(r);J.setItemHighlightedCallback(d);J.setItemSelectedCallback(z);J.setVisibleItemCount(e);J.initialise();m.setDataMapper({getTitle:function(O){return O.title;},getSubtitle:function(O){return O.subtitle;}});m.initialise();s.initialise();j.initialise();N.initialise();q.apps.core.ContextManager.initialisationComplete(FirstInstall);},activate:function(O){E=FirstInstall.getString("notAvailable");g=J;I.hide();q.platform.system.Preferences.set(q.app.constants.PREF_UI_MIGRATION_STATUS,true);if(A){J.setData(i());J.displayData();J.focus();}else{h.hide();y.hide();C();}},passivate:function(O){if(K){K.hideDialog();}m.passivate();A=false;c();},focus:function(){D();},defocus:function(){c();},toString:function(){return"FIRSTINSTALL";},dlgCallback:function(O){if(O&&(O.action===q.app.constants.YES_OPTION)){q.app.ContextHelper.closeContext();}},keyHandler:function(P){var Q=q.apps.core.KeyInterceptor.getKeyMap(),R=false,O;q.app.MemoryUtil.setOrUpdateGarbageCollectTimeoutAndInterval();R=g.keyHandler(P);if(!R){switch(P){case Q.KEY_LEFT:case Q.KEY_EXIT:if(q.platform.system.Preferences.get(q.app.constants.PREF_ISINSTALLED)!=="true"){R=true;break;}O=q.app.DialogueHelper.createAndShowDialogue(q.app.constants.DLG_CONFIRM_LEAVE_INSTALLER,undefined,undefined,FirstInstall.dialogButtons);O.setSelectedCallback(FirstInstall.dlgCallback);R=true;break;case Q.KEY_HOME:case Q.KEY_MOSAIC:case Q.KEY_RADIO:case Q.KEY_GUIDE:case Q.KEY_AGORA:case Q.KEY_PPV:case Q.KEY_VIEW:case Q.KEY_MENU:case Q.KEY_PORTAL:case Q.KEY_VOD:case Q.KEY_VOL_UP:case Q.KEY_VOL_DOWN:case Q.KEY_MUTE:case Q.KEY_POWER:if(q.platform.system.Preferences.get(q.app.constants.PREF_ISINSTALLED)!=="true"){R=true;}break;}}return R;},dialogButtons:k,exit:b,itemSelected:function(){}};}(window.parent.$N));var $N=window.parent.$N;(function(b){function a(e,c){a.superConstructor.call(this,e);this._log=new b.apps.core.Log("CommonGUI","BoxMenu");b.apps.core.Language.importLanguageBundleForObject(a,null,"apps/firstInstall/common/","LanguageBundle.js",null,window);this._container=new b.gui.Group(this._docRef);this._background=new b.gui.Container(this._docRef,this._container);this._channelInstaller=new b.gui.PageableListWithArrows(this._docRef,this._container);this._subMenuContainer=new b.gui.Container(this._docRef,this._container);this._legend=new b.gui.Container(this._docRef,this._container);this._legendBack=new b.gui.Label(this._docRef,this._legend);this._legendBackArrow=new b.gui.Image(this._docRef,this._legend);this._legendOkIcon=new b.gui.Image(this._docRef,this._legend);this._legendEnter=new b.gui.Label(this._docRef,this._legend);this._legendGreenIcon=new b.gui.Image(this._docRef,this._legend);this._legendScan=new b.gui.Label(this._docRef,this._legend);this._keypad=new b.gui.BaseKeypad(this._docRef);this._selectionPad=new b.gui.SelectionList(this._docRef,this._container);this._signalBox=new b.gui.SignalBox(this._docRef,this._subMenuContainer);this._channelScanBox=new b.gui.ChannelScanBox(this._docRef);this._container.configure({width:1345.5,height:576});this._background.configure({width:660,height:576,cssClass:"menuBackgroundDefocus"});this._selectionPad.configure({x:0,y:90,itemHeight:70,visibleItemCount:4,cssClass:"firstInstallMenuText",itemTemplate:"BoxMenuItemWithIcon"});this._channelInstaller.configure({x:0,y:63,itemHeight:120,visibleItemCount:4,itemTemplate:"BoxMenuItem",upArrowProperties:{x:610,y:-40,visible:false},downArrowProperties:{x:610,y:480,visible:false}});this._legend.configure({x:0,y:600,width:660,height:72,cssClass:"menuBackgroundDefocus"});this._legendBack.configure({x:61.5,y:45,cssClass:"legend"});this._legendBackArrow.configure({x:28.5,y:21,href:"../../../customise/resources/images/%RES/icons/left_arrow.png"});this._legendOkIcon.configure({x:453,y:17,href:"../../../customise/resources/images/%RES/icons/OK.png"});this._legendEnter.configure({x:505,y:45,cssClass:"legend"});this._legendGreenIcon.configure({x:670,y:17,href:"../../../customise/resources/images/%RES/icons/botao_verde.png"});this._legendScan.configure({x:722,y:45,cssClass:"legend"});this._subMenuContainer.configure({x:685.5,y:0});this.subMenuActive=false;this._exitCallback=null;this._menu=null;this._subMenu=null;this._selectedIndex=0;this._isChannelScanSuccessful=false;this._scanConfig=null;this._MIN_NETWORK_ID=1;this._MAX_NETWORK_ID=65535;this._MIN_FREQUENCY=5000;this._MAX_FREQUENCY=862000;this._MIN_SYMBOL_RATE=1000;this._MAX_SYMBOL_RATE=9000;this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}this.restoreLegend=function(){this.subMenuActive=false;this._legendBackArrow.setX(28.5);this._legendBack.setX(61.5);this._legendOkIcon.show();this._legendEnter.show();this._legendGreenIcon.show();this._legendScan.show();};this.showKeypad=function(g,f){this._keypad.resetKeyPadConfig();b.app.KeyboardUtils.setKeypad(this._keypad,b.app.KeyboardType.NUMERIC);this._keypad.configure({keypadTitle:g.title,exitCallback:g.exitCallback,textInputAlignment:b.app.KeyboardType.ALIGNMENT.CENTRE});b.app.KeyboardUtils.setKeypadReturnObject(g.returnObject);b.app.KeyboardUtils.setSaveCallback(g.saveCallback);this._keypad.clearInput();switch(f){case"networkId":this._keypad.setInputFormat(5,0,"");this._keypad.setMinNumericKeypadValue(this._MIN_NETWORK_ID);this._keypad.setMaxNumericKeypadValue(this._MAX_NETWORK_ID);break;case"frequency":this._keypad.setInputFormat(6,0,"");this._keypad.setMinNumericKeypadValue(this._MIN_FREQUENCY);this._keypad.setMaxNumericKeypadValue(this._MAX_FREQUENCY);break;case"symbolRate":this._keypad.setInputFormat(4,0,"");this._keypad.setMinNumericKeypadValue(this._MIN_SYMBOL_RATE);this._keypad.setMaxNumericKeypadValue(this._MAX_SYMBOL_RATE);break;}b.app.KeyboardUtils.showKeypad(b.app.KeyboardType.NUMERIC);this._keypad.focus();this._keypad.show();};this.getModulationData=function(g){var f,h=[{title:"16 QAM",value:1,selected:false},{title:"64 QAM",value:3,selected:false},{title:"256 QAM",value:5,selected:false}];f=b.app.ArrayUtil.getIndex(h,function(i){return i.title===g;});if(f===-1){f=5;}h[f].selected=true;return h;};this.updateUI=function(i){var g=this._channelInstaller.getActualSelectedItem(),h=this._channelInstaller.getData(),f=b.app.ArrayUtil.getIndex(h,function(j){return i.key===j.key;});g.update(i);h[f]=i;this._channelInstaller.setData(h);this._channelInstaller.selectItemAtIndex(this._selectedIndex,true);this._channelInstaller.displayData();};var d=this;this.scanValueSavedCallback=function(){d._signalBox.setStrengthScanValue(false);d._signalBox.enableStrengthScan();d._signalBox._channelsFoundLabel.hide();};this.saveScanParameters=function(){b.common.helper.ScanManager.updateNetworkConfig(this._scanConfig,this.scanValueSavedCallback,null);};this.updateProgressBar=function(g){var f=b.platform.btv.EPG.getVideoChannels().length;};this.onScanFailure=function(){d._channelScanBox.setMessage(a.getString("scanFailed"));};this.onScanComplete=function(){var f=b.platform.btv.EPG.getVideoChannels().length,g=f+" "+a.getString("channelsFound");if(f>0){d._isChannelScanSuccessful=true;d._signalBox.setChannelsFound(g);b.app.ChannelManager.tuneToBarkerChannel(false);}d.setSubMenu(d._signalBox);d.restoreLegend();d._menu.focus();d._background.setCssClass("menuBackgroundFocus");};}b.gui.Util.extend(a,b.gui.GUIObject);a.prototype.removeComponent=function(c){c._removeReferenceFromParent();if(c._rootElement&&c._rootElement.parentNode){c._rootElement.parentNode.removeChild(c._rootElement);}};a.prototype.focus=function(){this._menu.focus();this._background.setCssClass("menuBackgroundFocus");this._legend.setWidth(1345.5);this._legendOkIcon.show();this._legendEnter.show();this._legendGreenIcon.show();this._legendScan.show();this.subMenuActive=false;};a.prototype._itemSelected=function(f){var e=this,d=null,c={title:f.title,returnObject:{title:f.title,key:f.key,value:null},exitCallback:function(){e.setMenu(e._channelInstaller);e.saveScanParameters();},saveCallback:function(g){var h={title:g.title,key:g.key,subtitle:parseInt(g.value,10)||0};e._scanConfig[h.key]=g.value;e.setMenu(e._channelInstaller);e.updateUI(h);e.saveScanParameters();}};this._selectedIndex=this._channelInstaller.getSelectedItemIndex();switch(f.key){case"modulation":this.setMenu(this._selectionPad);this._selectionPad.setTitle(f.title);this._selectionPad.setData(this.getModulationData(f.subtitle));this._selectionPad.displayData();this._selectionPad.focus();break;default:this.setMenu(this._keypad);this.showKeypad(c,f.key);}};a.prototype.performScan=function(){this._menu.defocus();this._background.setCssClass("menuBackgroundDefocus");this.setSubMenu(this._channelScanBox);this._signalBox.disableStrengthScan();this._channelScanBox.activate();this.subMenuActive=true;this._legendBackArrow.setX(695.5);this._legendBack.setX(728.5);this._legendOkIcon.hide();this._legendEnter.hide();this._legendGreenIcon.hide();this._legendScan.hide();b.common.helper.ScanManager.setScanCompleteCallback(this.onScanComplete);b.common.helper.ScanManager.setScanProgressCallback(this.updateProgressBar,500);b.common.helper.ScanManager.setScanFailureCallback(this.onScanFailure);b.common.helper.ScanManager.triggerScan("cableoneshot");};a.prototype._enableStrengthScanOnSignalGain=function(){this._signalBox.setChannelsFound("");this._signalBox.setStrengthScanValue(false);this._signalBox.enableStrengthScan();};a.prototype._reInitiateSignalStrengthScan=function(){this._signalBox.setChannelsFound("");this._signalBox.setStrengthScanValue(false);this._signalBox.enableStrengthScan();};a.prototype._disableStrengthScanOnSignalLoss=function(){this._signalBox.setChannelsFound("");this._signalBox.setStrengthScanValue(true);this._signalBox._updateSignalStrength(null);this._signalBox.disableStrengthScan();};a.prototype.initialise=function(){var c=this,d=b.common.helper.ScanManager.getNetworkConfig();this._scanConfig={networkId:d.networkId,frequency:d.frequency,symbolRate:d.symbolRate,modulation:d.modulation};this.setMenu(this._channelInstaller);this._menu.setItemSelectedCallback(function(e){c._itemSelected(e);});this._menu.setDataMapper(this._dataMapper);this._menu.initialise();this._selectionPad.setExitCallback(function(){c.setMenu(c._channelInstaller);});this._selectionPad.setItemSelectedCallback(function(e){var f={title:a.getString("modulation"),key:"modulation",subtitle:e.title};c._scanConfig.modulation=e.value;c.setMenu(c._channelInstaller);c.updateUI(f);c.saveScanParameters();});this._selectionPad.setDataMapper({getTitle:function(e){return e.title;},getSelected:function(e){return e.selected;},getIcon:function(e){return"";}});this._selectionPad.initialise();this._selectionPad.setTitle(a.getString("modulation"));this._channelScanBox.setExitCallback(function(){b.app.SettingsAPI.cancelScan();c._reInitiateSignalStrengthScan();c.restoreLegend();c.setSubMenu(c._signalBox);c._menu.focus();});this.setSubMenu(this._signalBox);this._keypad.setCssClassForKeypadTitle("firstInstallMenuText");this._subMenu.initialise();b.app.fullScreenPlayer.tuner.registerQosImprovedListener(function(){c._enableStrengthScanOnSignalGain();});b.app.fullScreenPlayer.tuner.registerQosDegradedListener(function(){c._disableStrengthScanOnSignalLoss();});};a.prototype.onLanguageChanged=function(){this.setSubMenu(this._signalBox);this._subMenu.refreshData();};a.prototype.preview=function(c){this._signalBox.enableStrengthScan();this.setMenu(this._channelInstaller);this._menu.setData(c);this._menu.displayData(true,true);this._legend.hide();this.show();this._subMenu.preview();};a.prototype.activate=function(d){var c=this;b.common.helper.ScanManager.setAutomaticScanEnabledCallback(function(){c._signalBox.enableStrengthScan();});this._legendBack.setText(a.getString("menuSettingsBack"));this._legendEnter.setText(a.getString("select"));this._legendScan.setText(a.getString("scan"));this.focus();this._legend.show();if(d){this._menu.setData(d);this._menu.displayData();}else{this._menu._getSelectedObject().highlight();}this._signalBox.activate();this.show();};a.prototype.passivate=function(){var c=this;b.common.helper.ScanManager.setAutomaticScanEnabledCallback(null);this._legend.hide();this._menu.defocus();this._background.setCssClass("menuBackgroundDefocus");this._signalBox.passivate();b.app.fullScreenPlayer.tuner.unregisterQosImprovedListener(function(){c._enableStrengthScanOnSignalGain();});b.app.fullScreenPlayer.tuner.unregisterQosDegradedListener(function(){c._disableStrengthScanOnSignalLoss();});};a.prototype.setDataMapper=function(c){this._dataMapper=c;};a.prototype.setMenu=function(c){if(this._menu){this.removeComponent(this._menu);}this._menu=c;this._container.addChild(this._menu);};a.prototype.setSubMenu=function(c){if(this._subMenu){this.removeComponent(this._subMenu);}this._subMenu=c;this._subMenuContainer.addChild(this._subMenu);};a.prototype.setExitCallback=function(c){this._exitCallback=c;};a.prototype.getChannelScanResult=function(){return this._isChannelScanSuccessful;};a.prototype.keyHandler=function(c){var d=b.apps.core.KeyInterceptor.getKeyMap(),e=false;if(this.subMenuActive){e=this._subMenu.keyHandler(c);}else{e=this._menu.keyHandler(c);}if(!e){switch(c){case d.KEY_LEFT:case d.KEY_BACK:e=true;this.passivate();if(this._exitCallback){this._exitCallback();}break;case d.KEY_GREEN:this.performScan();e=true;break;case d.KEY_EXIT:this.restoreLegend();this.passivate();if(this._exitCallback){this._exitCallback();}break;}}return e;};b.gui.BoxMenu=a;}($N||{}));var $N=window.parent.$N;(function(b){var a=function(d,c){a.superConstructor.call(this,d);this.isFocused=true;this.isHighlighted=false;this._container=new b.gui.Group(d);this._background=new b.gui.Container(d,this._container);this._title=new b.gui.Label(d,this._container);this._subtitle=new b.gui.Label(d,this._container);this._highlight=new b.gui.Container(d,this._container);this._width=660;this._height=96;this.PADDING=22.5;this._container.configure({width:this._width,height:this._height});this._background.configure({width:this._width,height:this._height,cssClass:"menuItemBackgroundFocus",visible:false});this._title.configure({x:this.PADDING,y:34.5,width:this._width-(this.PADDING*2),cssClass:"firstInstallMenuText"});this._subtitle.configure({x:this.PADDING,y:81,width:this._width-(this.PADDING*2),cssClass:"firstInstallMenuText"});this._highlight.configure({width:this._width,height:this._height,cssClass:"menuItemHighlight",rounding:1,visible:false});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}};b.gui.Util.extend(a,b.gui.AbstractListItem);a.prototype.setWidth=function(c){this._width=c;this._container.setWidth(c);this._background.setWidth(c);this._highlight.setWidth(c);this._title.setWidth(c-(this.PADDING*2));this._subtitle.setWidth(c-(this.PADDING*2));};a.prototype.setHeight=function(c){this._height=c;this._container.setHeight(c);this._background.setHeight(c);this._highlight.setHeight(c);};a.prototype.updateHighlight=function(){if(this.isHighlighted){if(this.isFocused){this._background.setCssClass("menuItemBackgroundFocus");this._background.show();this._highlight.show();}else{this._highlight.hide();this._background.setCssClass("menuItemBackgroundDefocus");this._background.show();}}else{this._highlight.hide();this._background.hide();}};a.prototype.highlight=function(){this.isHighlighted=true;this.updateHighlight();};a.prototype.unHighlight=function(){this.isHighlighted=false;this.updateHighlight();};a.prototype.focus=function(){this.isFocused=true;this.updateHighlight();};a.prototype.defocus=function(){this.isFocused=false;this.updateHighlight();};a.prototype.update=function(c){this._title.setText(this._dataMapper.getTitle(c));this._subtitle.setText(this._dataMapper.getSubtitle(c));};b.gui.BoxMenuItem=a;}($N||{}));var $N=window.parent.$N;(function(b){var a=function(d,c){a.superConstructor.call(this,d);this.isFocused=true;this.isHighlighted=false;this._container=new b.gui.Group(d);this._background=new b.gui.Container(d,this._container);this._title=new b.gui.Label(d,this._container);this._highlight=new b.gui.Container(d,this._container);this._icon=new b.gui.Image(this._docRef,this._container);this._width=660;this._height=49;this.PADDING=22.5;this._container.configure({width:this._width,height:this._height});this._background.configure({width:this._width,height:this._height,cssClass:"menuItemBackgroundFocus",visible:false});this._title.configure({x:63,y:34.5,width:this._width-this.PADDING-63,cssClass:"firstInstallMenuText"});this._highlight.configure({width:this._width,height:this._height,cssClass:"menuItemHighlight",rounding:1,visible:false});this._icon.configure({x:24,y:12,width:25,height:25,href:"../../../customise/resources/images/%RES/icons/tick_17x17.png",visible:true});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}};b.gui.Util.extend(a,b.gui.AbstractListItem);a.prototype.setWidth=function(c){this._width=c;this._container.setWidth(c);this._background.setWidth(c);this._highlight.setWidth(c);this._title.setWidth(c-this.PADDING-63);};a.prototype.setHeight=function(c){this._height=c;this._container.setHeight(c);this._background.setHeight(c);this._highlight.setHeight(c);};a.prototype.updateHighlight=function(){if(this.isHighlighted&&this.isFocused){this._background.show();this._highlight.show();}else{this._highlight.hide();this._background.hide();}};a.prototype.highlight=function(){this.isHighlighted=true;this.updateHighlight();};a.prototype.unHighlight=function(){this.isHighlighted=false;this.updateHighlight();};a.prototype.focus=function(){this.isFocused=true;this.updateHighlight();};a.prototype.defocus=function(){this.isFocused=false;this.updateHighlight();};a.prototype.update=function(e){if(e){this._title.setText(this._dataMapper.getTitle(e));var c=this._dataMapper.getIcon(e)||this._icon.getHref(),d=this._dataMapper.getSelected(e);if(c){this._icon.setHref(c);this._icon.setVisible(d);}else{this._icon.hide();}}};a.prototype.showIcon=function(){if(this._icon.getHref()){this._icon.show();}};a.prototype.hideIcon=function(){this._icon.hide();};a.prototype.toggleIconVisibility=function(){if(this._icon.isVisible()){this._icon.hide();}else{this._icon.show();}};b.gui.BoxMenuItemWithIcon=a;}($N||{}));var $N=window.parent.$N;(function(b){function a(d,c){a.superConstructor.call(this,d);this._log=new b.apps.core.Log("CommonGUI","ChannelScanBox");b.apps.core.Language.importLanguageBundleForObject(a,null,"apps/firstInstall/common/","LanguageBundle.js",null,window);this._exitCallback=null;this._container=new b.gui.Group(this._docRef);this._background=new b.gui.Container(this._docRef,this._container);this._infoLabel=new b.gui.Label(d,this._container);this._messageLabel=new b.gui.Label(d,this._container);this._logo=new b.gui.Image(d,this._container);this._width=660;this._height=576;this._container.configure({width:this._width,height:this._height});this._background.configure({width:this._width,height:this._height,cssClass:"menuBackgroundDefocus"});this._infoLabel.configure({x:180,y:300,cssClass:"dialogSubtitle"});this._messageLabel.configure({x:330,y:488,cssClass:"dialog_title_centre",text:a.getString("channelScanMessage")});this._logo.configure({x:208.5,y:180,width:243,height:99,href:"../../../customise/resources/images/net/NET_logo.png"});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}}b.gui.Util.extend(a,b.gui.GUIObject);a.prototype.initialise=function(){this._strengthLabel.setText(a.getString("signalStrength"));};a.prototype.setScanUpdateInfo=function(c){this._infoLabel.setText(c+" "+a.getString("channelsFound"));};a.prototype.setMessage=function(c){this._messageLabel.setText(c);};a.prototype.preview=function(c){this.show();};a.prototype.activate=function(){this._background.setCssClass("menuBackgroundFocus");this._infoLabel.setText("");this.setMessage(a.getString("channelScanMessage"));this.show();};a.prototype.passivate=function(){this.hide();this._background.setCssClass("menuBackgroundDefocus");};a.prototype.setExitCallback=function(c){this._exitCallback=c;};a.prototype.keyHandler=function(c){var d=b.apps.core.KeyInterceptor.getKeyMap(),e=false;switch(c){case d.KEY_LEFT:case d.KEY_BACK:e=true;this.passivate();if(this._exitCallback){this._exitCallback();}break;}return e;};b.gui.ChannelScanBox=a;}($N||{}));var $N=window.parent.$N;(function(b){function a(d,c){a.superConstructor.call(this,d);this._log=new b.apps.core.Log("CommonGUI","FactoryResetBox");b.apps.core.Language.importLanguageBundleForObject(a,null,"apps/firstInstall/common/","LanguageBundle.js",null,window);this._exitCallback=null;this._messagePopup=null;this._blockKeys=false;this._container=new b.gui.Group(this._docRef);this._background=new b.gui.Container(this._docRef,this._container);this._reseter=new b.gui.PageableList(this._docRef,this._container);this._legend=new b.gui.Container(this._docRef,this._container);this._legendBack=new b.gui.Label(this._docRef,this._legend);this._legendEnter=new b.gui.Label(this._docRef,this._legend);this._legendBackArrow=new b.gui.Image(this._docRef,this._legend);this._legendOkIcon=new b.gui.Image(this._docRef,this._legend);this._container.configure({width:1345.5,height:576});this._background.configure({width:660,height:576,cssClass:"menuBackgroundDefocus"});this._reseter.configure({x:0,y:63,itemHeight:80,visibleItemCount:4,itemTemplate:"ListMenuItem",itemConfig:{titleConfig:{x:22.5,y:42}}});this._legend.configure({x:0,y:600,width:660,height:72,cssClass:"menuBackgroundDefocus"});this._legendBack.configure({x:61.5,y:45,cssClass:"legend"});this._legendEnter.configure({x:505,y:45,cssClass:"legend"});this._legendBackArrow.configure({x:28.5,y:21,href:"../../../customise/resources/images/%RES/icons/left_arrow.png"});this._legendOkIcon.configure({x:453,y:17,href:"../../../customise/resources/images/%RES/icons/OK.png"});this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}}b.gui.Util.extend(a,b.gui.GUIObject);a.prototype.focus=function(){this._reseter.focus();this._background.setCssClass("menuBackgroundFocus");this._legendEnter.show();this._legendOkIcon.show();};a.prototype._itemSelected=function(e){var c=this,h=1,f=2,d=[{name:a.getString("cancel"),action:f},{name:a.getString("cont"),action:h}],g=function(i){if(i.action===h){this._blockKeys=true;if(c._messagePopup){c._messagePopup.setBlockUI(true);c._messagePopup.setMessage(a.getString("factoryResetMessage"));}b.app.SystemUtil.doFactoryReset();}else{this._blockKeys=false;}};b.app.DialogueHelper.createAndShowDialogue(b.app.constants.DLG_FACTORY_RESET_CONFIRMATION,a.getString("attention"),a.getString("warningMessage"),d,g,null,null,null,null,true);};a.prototype.initialise=function(){var c=this;this._reseter.setItemSelectedCallback(function(d){c._itemSelected(d);});this._reseter.setDataMapper({getTitle:function(d){return d.title;}});this._reseter.initialise();};a.prototype.preview=function(c){this._reseter.setData(c);this._reseter.displayData(true,true);this._legend.hide();this.show();};a.prototype.activate=function(c){this._legendBack.setText(a.getString("menuSettingsBack"));this._legendEnter.setText(a.getString("select"));this.focus();this._legend.show();if(c){this._reseter.setData(c);this._reseter.displayData();}else{this._reseter._getSelectedObject().highlight();}this.show();};a.prototype.passivate=function(){this._legend.hide();this._reseter.defocus();this._background.setCssClass("menuBackgroundDefocus");};a.prototype.setExitCallback=function(c){this._exitCallback=c;};a.prototype.setMessagePopup=function(c){this._messagePopup=c;};a.prototype.keyHandler=function(c){var d=b.apps.core.KeyInterceptor.getKeyMap(),e=false;if(this._blockKeys){return true;}e=this._reseter.keyHandler(c);if(!e){switch(c){case d.KEY_LEFT:case d.KEY_BACK:e=true;this.passivate();if(this._exitCallback){this._exitCallback();}break;}}return e;};b.gui.FactoryResetBox=a;}($N||{}));var $N=window.parent.$N;(function(a){function b(d,c){b.superConstructor.call(this,d);this._log=new a.apps.core.Log("CommonGUI","SignalBox");a.apps.core.Language.importLanguageBundleForObject(b,null,"apps/firstInstall/common/","LanguageBundle.js",null,window);this._container=new a.gui.Group(this._docRef);this._background=new a.gui.Container(this._docRef,this._container);this._strengthLabel=new a.gui.Label(d,this._container);this._strengthProgress=new a.gui.SettingsProgressBarMenuItem(d,this._container);this._qualityLabel=new a.gui.Label(d,this._container);this._qualityProgress=new a.gui.SettingsProgressBarMenuItem(d,this._container);this._frontLabel=new a.gui.Label(d,this._container);this._BERLabel=new a.gui.Label(d,this._container);this._frontValueLabel=new a.gui.Label(d,this._container);this._BERValueLabel=new a.gui.Label(d,this._container);this._channelsFoundLabel=new a.gui.Label(d,this._container);this._width=660;this._height=576;this._container.configure({width:this._width,height:this._height});this._background.configure({width:this._width,height:this._height,cssClass:"menuBackgroundDefocus"});this._strengthLabel.configure({x:27,y:180,cssClass:"firstInstallvalueLabel"});this._strengthProgress.configure({x:-40,y:110,progressTextConfig:{x:517,y:115,cssClass:"progressEndLabel"},progressBarConfig:{x:67,y:90,height:22.5,width:440,outerCssClass:"signalProgressBarOuter"}});this._qualityLabel.configure({x:27,y:280,cssClass:"firstInstallvalueLabel"});this._qualityProgress.configure({x:-40,y:180,progressTextConfig:{x:517,y:140,cssClass:"progressEndLabel"},progressBarConfig:{x:67,y:120,height:22.5,width:440,outerCssClass:"signalProgressBarOuter"}});this._frontLabel.configure({x:27,y:105,cssClass:"installAlternative"});this._frontValueLabel.configure({x:360,y:105,cssClass:"firstInstallvalueLabel"});this._BERLabel.configure({x:27,y:400,cssClass:"installAlternative"});this._BERValueLabel.configure({x:125,y:400,cssClass:"firstInstallvalueLabel"});this._channelsFoundLabel.configure({x:330,y:498,cssClass:"dialog_title_centre",visible:false});this._SIGNAL_QUALITY_THRESHOLD=30;this.strengthScanEnabled=false;this._rootSVGRef=this._container.getRootSVGRef();if(c){c.addChild(this);}}a.gui.Util.extend(b,a.gui.GUIObject);b.prototype._updateSignalStrength=function(d){var c=-16;if(this.strengthScanEnabled){if(d){this.setSignalStrength(d?a.app.SignalInfoUtil.convertSignalStrengthTodBmV(d.signalStrength):0);this.setSignalQuality(d?d.SNR:0);this.setFrontEndLocked(d&&d.SNR>this._SIGNAL_QUALITY_THRESHOLD?b.getString("yes"):b.getString("no"));this.setBER(d?d.BER.toExponential(2):"N/A");}else{this.setSignalStrength(c);this.setSignalQuality(0);this.setFrontEndLocked(b.getString("no"));this.setBER("N/A");}}};b.prototype.setSignalStrength=function(c){this._strengthProgress.setProgressIndicatorText("dBmV");if(!isNaN(c)&&a.app.GeneralUtil.isFloat(c)){c=c.toFixed(1);}this._strengthProgress.updateProgressBar(-16,20,c,0);};b.prototype.setSignalQuality=function(c){this._qualityProgress.setProgressIndicatorText("%");this._qualityProgress.updateProgressBar(0,100,c,0);};b.prototype.setFrontEndLocked=function(c){this._frontValueLabel.setText(c);};b.prototype.setBER=function(c){this._BERValueLabel.setText(c);};b.prototype.setChannelsFound=function(c){this._channelsFoundLabel.setText(c);this._channelsFoundLabel.show();};b.prototype._setXforfrontValueLabel=function(c){this._frontValueLabel.setX(c);};b.prototype._setXforfrontLabel=function(c){this._frontLabel.setX(c);};b.prototype.initialise=function(){this._strengthLabel.setText(b.getString("signalStrength"));this._qualityLabel.setText(b.getString("signalQuality"));this._frontLabel.setText(b.getString("frontEndLocked"));this._frontValueLabel.setText("NO");this._BERLabel.setText(b.getString("BER"));this._BERValueLabel.setText("N/A");this.setSignalStrength(0);this.setSignalQuality(0);};b.prototype._setData=function(c){};b.prototype.refreshData=function(c){var d=a.platform.system.Preferences.get(a.app.constants.PREF_LANGUAGE);this.initialise();if(d===a.app.constants.LANG_ENGLISH_GB){this._setXforfrontValueLabel(360);}else{this._setXforfrontValueLabel(260);}this.show();};b.prototype.preview=function(c){var d=a.platform.system.Preferences.get(a.app.constants.PREF_LANGUAGE);if(d===a.app.constants.LANG_ENGLISH_GB){this._setXforfrontValueLabel(360);}else{this._setXforfrontValueLabel(260);}this.show();this.enableStrengthScan();};b.prototype.activate=function(){this._background.setCssClass("menuBackgroundFocus");this.show();this.enableStrengthScan();};b.prototype.passivate=function(){this.disableStrengthScan();this._channelsFoundLabel.hide();this.hide();this._background.setCssClass("menuBackgroundDefocus");};b.prototype.keyHandler=function(c){};b.prototype.setStrengthScanValue=function(c){this.strengthScanEnabled=c;};b.prototype.enableStrengthScan=function(){var f=this,c=1000,d=function(g){f._updateSignalStrength(g.progressInfo);},e=function(g){if(g&&g===a.platform.system.Scan.Error.UNAVAILABLE){f._updateSignalStrength(null);}this.strengthScanEnabled=false;};if(!this.strengthScanEnabled){this.strengthScanEnabled=true;a.app.SignalInfoUtil.startMonitorSignal(d,e,c);}};b.prototype.disableStrengthScan=function(){if(this.strengthScanEnabled){this.strengthScanEnabled=false;a.app.SignalInfoUtil.stopMonitorSignal();}};a.gui.SignalBox=b;}($N||{}));