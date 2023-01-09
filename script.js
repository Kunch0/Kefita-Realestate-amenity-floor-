(function(){
    var script = {
 "defaultVRPointer": "laser",
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "start": "this.playAudioList([this.audio_81452753_95F0_7257_41C1_E93955E740DE]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_8257FA83_95F0_F2B7_41C4_3C4E5DBD5EE1.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 20,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83ACBD5C_95F0_F651_41C3_DA801FADFD87",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 89.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DD10EA2_95F0_F2F1_41D0_198F2FC6E583",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -152.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8273A891_90F2_4190_41C5_69387F913932_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_817C6C00_95F0_F5B1_41DA_38D772AD6EFE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 179.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81956F28_95F0_F3F1_41D4_AE68A3823B17",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -157.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8369CD98_95F0_F6D1_41BF_7570993FECC2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 99.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_87193238_9096_409F_41D7_644AB64AF5BA",
  "this.overlay_864A3D22_9072_40B3_41E0_D6505D4F066F",
  "this.overlay_86488334_9072_C097_41B8_F371A48EF050",
  "this.overlay_868835D7_9076_C390_41D2_1EC564ABB951"
 ],
 "hfovMin": "120%",
 "label": "Gym 2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_8272CAFB_90F2_C191_41C7_DB068A643F80",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.32,
   "yaw": 147.74,
   "panorama": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 12.84,
   "yaw": 21.08,
   "panorama": "this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FAE554_909F_C097_41D7_093333DFA0A8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81299C29_95F0_F5F3_41D1_26DEF578BE13",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -138.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_D0B2FA96_9093_C193_41BB_AB0DDB56E352",
  "this.overlay_D733F952_9095_C090_41D1_2AC506C2F516"
 ],
 "hfovMin": "120%",
 "label": "women wash room 2",
 "class": "Panorama",
 "id": "panorama_8271C455_90F2_4091_41C3_9F219F955BE1",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 21.62,
   "yaw": -11.67,
   "panorama": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_C0A870A6_90B2_C1B0_41D5_7D9207F0D024"
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_B3EE7F48_93AE_40FF_41C7_44B871ABAB67",
  "this.overlay_B078CA34_93AE_4090_41C5_73FCE540A5BC",
  "this.overlay_B0E1B80B_93B5_C070_41DD_C291950BB1E1",
  "this.overlay_B1BBEF80_93B6_C070_41D7_55ADD372418E",
  "this.overlay_BB9D2821_90B2_40B1_41C1_E33443E67632",
  "this.overlay_A0E0C5F3_90BE_4390_41A1_D1A88C1C1B02",
  "this.overlay_C57C9831_91B5_C091_41E1_9B6983E406F4"
 ],
 "hfovMin": "120%",
 "label": "Coffee lounge 1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FAE554_909F_C097_41D7_093333DFA0A8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.74,
   "yaw": 2.4,
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -149.8,
   "yaw": -141.05,
   "panorama": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -149.8,
   "yaw": 152.03,
   "panorama": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8326FDD6_95F0_F651_41A1_17003C8BA286",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -92.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_AB76D5AC_9092_43B0_41D4_C3FF09C50937",
  "this.overlay_D6A6077F_90F6_4090_41E2_3D361CECF949",
  "this.overlay_D646A454_90F7_C090_41C9_FD5B3BAC364E",
  "this.overlay_D09B7797_90F2_4F91_41E0_FC9F508B449F",
  "this.overlay_D529B206_90FE_C070_41B1_18A91D8454A3"
 ],
 "hfovMin": "120%",
 "label": "women wash room entrance",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.04,
   "yaw": -152.89,
   "panorama": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -7.04,
   "yaw": 158.89,
   "panorama": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 135.39,
   "yaw": 5.32,
   "panorama": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81837BCE_95F0_F2B1_41B0_291946E6727B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 115,
  "yaw": 178.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_8E67AE56_9396_C090_41E0_6EFD8EA3C136",
  "this.overlay_8FA051E8_9395_C3BF_41A2_BAAFFEEF22E4",
  "this.overlay_8ED0E021_939D_C0B0_41A9_E0F3B2106BBA",
  "this.overlay_8CC3D530_9392_4090_41E1_18D3EE18425C",
  "this.overlay_8FB15173_9393_C091_41E0_85C8EDBBE1C5",
  "this.overlay_8C6747CF_9392_4FF0_41DA_1745B1EC9BAF"
 ],
 "hfovMin": "120%",
 "label": "Elevators Core 4",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F64A0F_909E_C070_41D4_73599B951CC4",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.48,
   "yaw": 78.76,
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30"
  },
  {
   "backwardYaw": 91.63,
   "yaw": -21.11,
   "panorama": "this.panorama_82F6DEF7_909D_C191_41C9_27540513D101",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_8602E27C_907E_C097_41E0_F3659D6D0908",
  "this.overlay_8BDB8F6B_9073_C0B0_41D8_A073D8086F2C"
 ],
 "hfovMin": "120%",
 "label": "Yoga",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -148.6,
   "yaw": -90.26,
   "panorama": "this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DB31B04_95F0_F3B1_41B4_9C14C0A3DDE4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -174.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_827119B8_90F2_C390_41D3_9AF4351227AB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_ABC38E9F_906E_C190_41CD_AE9CC51A6F00",
  "this.overlay_A9889738_906E_C090_41C7_0DA023BBC397",
  "this.overlay_AB2209E6_9072_C3B3_41D3_C965B6C94620",
  "this.overlay_AED650B2_9077_C190_41C5_15ED8A0957CB",
  "this.overlay_ABC2A20F_9075_C070_41DB_2457252DB668",
  "this.overlay_AB92F600_9073_C070_41DA_CEEBDDC4DECB",
  "this.overlay_ADA5B456_90B2_4090_41D2_83F42BA24DF7"
 ],
 "hfovMin": "120%",
 "label": "corrider  to bath",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.04,
   "yaw": 164.73,
   "panorama": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 13.04,
   "yaw": -164.73,
   "panorama": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -152.89,
   "yaw": -7.04,
   "panorama": "this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 150.31,
   "yaw": 27.13,
   "panorama": "this.panorama_82700584_90F2_4070_41B8_7E70E55B5938",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81708BF8_95F0_F251_41A5_D38D65581B88",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -33.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81AB6BAB_95F0_F2F7_41C2_D1D7F31B535D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 104.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_B6058D02_93B3_C076_41E0_3DD22AE7242A",
  "this.overlay_B70BADCA_93B2_C3F0_41DB_86122D8677D1",
  "this.overlay_B62E55B3_93AE_4390_41E1_1183F126C9F3",
  "this.overlay_B784FB4C_93AD_C0F0_41D4_E5722D286E1E",
  "this.overlay_B45A024C_9392_40F0_4188_8D0FA8D555F6",
  "this.overlay_B55D749C_9397_C197_41D3_C3401B27090F",
  "this.overlay_BB0A5CC4_9392_41F7_419B_7B8E73FAB70C",
  "this.overlay_BD59A129_90AD_C0B0_41CF_3EEA3EF29D3D",
  "this.overlay_A071EFD6_9092_5F93_41C5_693E5350E272",
  "this.overlay_A2DFFD87_9092_C070_41DF_536F93F31240",
  "this.overlay_A2A4DAA2_9092_41B0_41AD_D615EEC80EF2",
  "this.overlay_A0AE4BFB_909D_C791_41BD_61E443E7D2D6",
  "this.overlay_A2E69151_909E_4090_41DA_59AB89A7EF7F"
 ],
 "hfovMin": "120%",
 "label": "Reception and lobby (corridor)",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.7,
   "yaw": -167.99,
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -163.7,
   "yaw": 173.31,
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -163.7,
   "yaw": -172.52,
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 101.41,
   "yaw": -7.89,
   "panorama": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -53.02,
   "yaw": 142.42,
   "panorama": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -136.93,
   "yaw": 41.53,
   "panorama": "this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59"
  },
  {
   "backwardYaw": -122.86,
   "yaw": -78.07,
   "panorama": "this.panorama_82F6DEF7_909D_C191_41C9_27540513D101",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82CC0E29_95F0_F5F3_41DE_934FE133385A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 176.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81D23B89_95F0_F2B3_41DF_858467AC78C2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 39.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_819C2BE7_95F0_F27F_41D0_2EC1B3D7E3C6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 18.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83D03D38_95F0_F7D1_41D6_5E4225050460",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -158.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80519CE9_95F0_F673_41E1_121D6A4765B1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 115,
  "yaw": 15.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82AEDE38_95F0_F5D1_41D0_D836558BCC38",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 16.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8075CCD9_95F0_F653_41C4_FC22C3EC0834",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -14.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_87A53EF9_95F0_3253_41DD_557E79F0CA4F",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_8257FA83_95F0_F2B7_41C4_3C4E5DBD5EE1",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81140C56_95F0_F651_41BA_E23BE37297B4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -166.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81C3CB6F_95F0_F24F_41CE_C1B22BD7D679",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -177.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8123CC20_95F0_F5F1_41DC_D6461AD72D7D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -167.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83C68D2F_95F0_F7CF_419D_32D8E553BD66",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 38.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_D0B661AD_90B2_C3B0_41B1_80BEB5B5B4E9",
  "this.overlay_AA549206_90B2_4070_41D9_BCF6129F1AAE",
  "this.overlay_D4D51B52_90B3_C093_41C9_93E4E6C4ADBA"
 ],
 "hfovMin": "120%",
 "label": "Shower men",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -77.56,
   "yaw": 146.88,
   "panorama": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -77.56,
   "yaw": -166.27,
   "panorama": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_D2CBD1B0_90AD_C390_41DB_1381F2BB3538",
  "this.overlay_D00FD279_90AE_4090_41BE_A58358DA981A"
 ],
 "hfovMin": "120%",
 "label": "Changing room women 2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_820D700B_90F2_4071_41D8_54F5F8A2E133",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 33.12,
   "yaw": 87.86,
   "panorama": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81A6BEEC_95F0_F271_41CB_A01157127600",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -89.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80FA1C77_95F0_F65F_41D9_F906F78F3E9B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 172.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_809FDCC7_95F0_F6BF_41BB_B578DED890D8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 20.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A460B752_91AE_4090_41CD_30729115C7CD",
  "this.overlay_A400E1F4_9196_4390_41D4_E901CD638307",
  "this.overlay_A58BC5C2_9197_C3F3_41B9_A591984E017B",
  "this.overlay_AB6D4A7E_9196_C090_41BB_D8B4EB581B46",
  "this.overlay_D970ABD8_9096_4790_41D1_B042E0F2E140"
 ],
 "hfovMin": "120%",
 "label": "Lounge corrider",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_827119B8_90F2_C390_41D3_9AF4351227AB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -159.24,
   "yaw": -3.26,
   "panorama": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 165.24,
   "yaw": -157.69,
   "panorama": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 165.24,
   "yaw": 152.37,
   "panorama": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80813CB4_95F0_F6D1_41DB_7BEF619DE91E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -97.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82983E4D_95F0_F5B3_41D3_3BE7354A2DF7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -177.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "camera": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471_camera",
   "media": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8273A891_90F2_4190_41C5_69387F913932_camera",
   "media": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB_camera",
   "media": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_camera",
   "media": "this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_camera",
   "media": "this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_camera",
   "media": "this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F_camera",
   "media": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_camera",
   "media": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4_camera",
   "media": "this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_camera",
   "media": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_camera",
   "media": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F6DEF7_909D_C191_41C9_27540513D101_camera",
   "media": "this.panorama_82F6DEF7_909D_C191_41C9_27540513D101",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41_camera",
   "media": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_camera",
   "media": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8_camera",
   "media": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6_camera",
   "media": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_camera",
   "media": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D_camera",
   "media": "this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_camera",
   "media": "this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_camera",
   "media": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_camera",
   "media": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8284D938_909E_4090_41E0_17F4352B271A_camera",
   "media": "this.panorama_8284D938_909E_4090_41E0_17F4352B271A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_camera",
   "media": "this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_camera",
   "media": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_camera",
   "media": "this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_camera",
   "media": "this.panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_camera",
   "media": "this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A_camera",
   "media": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126_camera",
   "media": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82700584_90F2_4070_41B8_7E70E55B5938_camera",
   "media": "this.panorama_82700584_90F2_4070_41B8_7E70E55B5938",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_camera",
   "media": "this.panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90_camera",
   "media": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_camera",
   "media": "this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_camera",
   "media": "this.panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_camera",
   "media": "this.panorama_820D700B_90F2_4071_41D8_54F5F8A2E133",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_camera",
   "media": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8271C455_90F2_4091_41C3_9F219F955BE1_camera",
   "media": "this.panorama_8271C455_90F2_4091_41C3_9F219F955BE1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_camera",
   "media": "this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_camera",
   "media": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81DFFB9B_95F0_F2D7_41C3_668D42FE4112",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -81.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_BF791EA2_9092_41B3_41D1_BDC65E1C12C3",
  "this.overlay_BE757545_909E_C0F0_41DD_A6D09CE24B6F",
  "this.overlay_BCCDAC4D_909E_40F1_41D3_2EB96BB95CAB",
  "this.overlay_BC953B6C_9092_40B7_41B9_8643C618516A",
  "this.overlay_BCA028FD_9096_4191_41C6_E0B8D8E7DA3C",
  "this.overlay_BDC459E7_9097_C3B0_41DB_DFC89A8EA782",
  "this.overlay_BD91FD1A_9097_C090_41D4_BE5A1B36430D"
 ],
 "hfovMin": "120%",
 "label": "Function 1.3",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FE3648_909E_40FF_41B9_8538CC50784D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.74,
   "yaw": -140.88,
   "panorama": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 25.74,
   "yaw": 147.91,
   "panorama": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6"
  },
  {
   "backwardYaw": -67.26,
   "yaw": -55.42,
   "panorama": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_t.jpg"
},
{
 "audio": "this.audioresource_DA076E17_90B6_4090_41CF_01DE534307EB",
 "data": {
  "label": "business-corporate-background-127557"
 },
 "id": "audio_C0A870A6_90B2_C1B0_41D5_7D9207F0D024",
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8356BDC9_95F0_F6B3_41B5_F3049304D3C0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -107.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83008DF2_95F0_F651_4194_E2060ED84991",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 145.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_B676FF93_93B3_FF91_41D8_304EC4F22D81",
  "this.overlay_A2CB498E_9092_4070_41DA_358F1D626B78",
  "this.overlay_BD07BA86_9093_C073_41DD_B1AB31B6AA73",
  "this.overlay_A29F3E82_9072_4073_41D5_DD33D8214FC6",
  "this.overlay_A3D828EB_9192_C1B0_41E2_26FFF35784D8",
  "this.overlay_A2750092_9193_C190_41D2_70701D918972"
 ],
 "hfovMin": "120%",
 "label": "Corridor 2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -155.98,
   "yaw": -91.97,
   "panorama": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -7.89,
   "yaw": 101.41,
   "panorama": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DF2BAC6_95F0_F2B1_41E0_98A358262FB7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 77.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82E28E10_95F0_F5D1_41E0_F46BCB609812",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -154.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DFF2AD0_95F0_F251_41D1_6E3B5F98C5CA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 82.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8284D938_909E_4090_41E0_17F4352B271A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_D09454F7_9096_4191_41C6_4477ACEF0807",
  "this.overlay_D3E09524_9092_40B0_41CD_36167C27F80B"
 ],
 "hfovMin": "120%",
 "label": "changing room women",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.74,
   "yaw": 72.58,
   "panorama": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82F21E1A_95F0_F5D1_41D6_8691E25E4381",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 112.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81B02BBC_95F0_F2D1_41BB_796FEC97A630",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -168.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_814B8C09_95F0_F5B3_41E0_FE26D1796CC5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 148.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A70181ED_91B5_C3B0_41AA_C6277B2860D5",
  "this.overlay_A7322AB8_91B2_4190_41D7_EDF2020C2C32",
  "this.overlay_A68436F9_91AE_4190_41CB_7A2B0A2FA527",
  "this.overlay_A787501C_9192_4090_41DA_47C3D1B0C31A",
  "this.overlay_D9AEA8FE_9192_C190_41D8_DFAED85B3FF6"
 ],
 "hfovMin": "120%",
 "label": "Child Care Room 2.1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -75.67,
   "yaw": -150.49,
   "panorama": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -75.67,
   "yaw": 159.24,
   "panorama": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 11.5,
   "yaw": 22.14,
   "panorama": "this.panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_8FBD20DA_93EE_4190_41C7_0B9049226AD3",
  "this.overlay_8FCC1556_93EE_C093_41DD_64600561A429",
  "this.overlay_8D5FE2D5_93F2_4190_41DE_FF52AC0312F8",
  "this.overlay_8C5744C2_93F5_C1F0_41D6_7060AB8D38C3"
 ],
 "hfovMin": "120%",
 "label": "Elevators Core 5",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F62878_909E_C090_41D9_D17E7CD5CD83",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 98.15,
   "yaw": -102.44,
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 89.57,
   "yaw": 12.18,
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_802C4CFA_95F0_F651_41D6_E63275731632",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 22.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81C84B81_95F0_F2B3_41C6_5AD0435A73E0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -37.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82543E6A_95F0_F271_4198_E421855B342C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 16.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80080D0A_95F0_F7B1_41D5_55979C8EEE72",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 158.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8206EE7F_95F0_F24F_41B0_0E7B55C673F7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 126.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81F8DB66_95F0_F271_41E2_3CC1191F1921",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -146.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81D56B92_95F0_F2D1_41E0_FA5AEB8DF73A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -138.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DE0AE8D_95F0_F2B3_41DC_57EA1277D9F0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 57.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80A5FCA0_95F0_F6F1_41DB_11B6E2237544",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 88.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F6DEF7_909D_C191_41C9_27540513D101_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81AD5EFA_95F0_F251_41DA_F64709871680",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 24.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8135DC35_95F0_F5D3_41B2_84BFFDE66DF8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 125.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81AD0BB3_95F0_F2D7_41D2_104C90BA1226",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 104.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_88B1B8F3_93AE_4190_41D0_9FF28B245CEC",
  "this.overlay_8BD89261_93AE_40B0_41CF_83741A486493",
  "this.overlay_88C1ED82_93B2_4070_41E2_085EF6505415",
  "this.overlay_896F051A_93B6_4090_41A8_A58C99BF3E7C",
  "this.overlay_8BCE5B53_93B6_4090_41D1_8F31EEA8BC38",
  "this.overlay_8E001BAC_93B5_C7B0_41CF_F66A89687563",
  "this.overlay_8923614B_93B3_C0F0_41D3_9D75E175319B",
  "this.overlay_896AF62D_93BE_40B1_41E1_FF71DFBAC886",
  "this.overlay_8E5B832C_93AF_C0B0_41B2_B721EB4E11F0"
 ],
 "hfovMin": "120%",
 "label": "Elevators Core 3",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 78.76,
   "yaw": -80.48,
   "panorama": "this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -102.44,
   "yaw": 98.15,
   "panorama": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -97.72,
   "yaw": 2.75,
   "panorama": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -3.09,
   "yaw": -161.12,
   "panorama": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -3.09,
   "yaw": 172.11,
   "panorama": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_B5B8A64A_9396_C0F0_41A0_75D4FAEB58CD",
  "this.overlay_BB1AB8DE_9395_C190_41D1_EA7A1EDACCC1",
  "this.overlay_B82975A5_9392_43B1_41C5_AD1570BC63BA",
  "this.overlay_BA5007AD_9072_CFB0_41E2_22D3C2348A0D",
  "this.overlay_BB7B8F12_9075_C090_41DA_AB7ED6439ABC",
  "this.overlay_BB5938F1_9077_C191_418A_2F9547505166",
  "this.overlay_BBFEA377_9073_C091_41DE_577481325268",
  "this.overlay_B8DC1E6D_9072_C0B1_41DB_855C6C754DEB"
 ],
 "hfovMin": "120%",
 "label": "Elevator  lobby",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F08002_909E_4073_41A6_BFDAF0599E41",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.75,
   "yaw": -97.72,
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -117.88,
   "yaw": -163.7,
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83"
  },
  {
   "backwardYaw": 142.42,
   "yaw": -53.02,
   "panorama": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80EC4C6B_95F0_F677_41D3_33CE4F931752",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -29.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8271C455_90F2_4091_41C3_9F219F955BE1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F6B794_909E_4F97_41CE_89246379FDF6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_806BCCD0_95F0_F651_41E0_F87BDC6D14A6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -14.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_B802C2C4_90BE_C1F7_41C2_B3E4433DF25A",
  "this.overlay_BE87BBEA_90B7_C7B3_41A8_D5DF0A3B6FDA",
  "this.overlay_B81BAF9C_90B2_5F90_41C9_B1663D328935",
  "this.overlay_BB449761_9093_C0B0_41D5_04A991836325",
  "this.overlay_B92D9397_9092_4790_41DE_232F471F64DC"
 ],
 "hfovMin": "120%",
 "label": "Function 1.1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F6B794_909E_4F97_41CE_89246379FDF6",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -129.72,
   "yaw": -6.69,
   "panorama": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -141.05,
   "yaw": -149.8,
   "panorama": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -141.05,
   "yaw": 133.5,
   "panorama": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83749DA5_95F0_F6F3_41DE_9A0B128D64B7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -88.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_D6F880BD_90FE_4190_41CB_16424736679C",
  "this.overlay_D625DD1F_90FD_C090_41D6_A5FD01563603",
  "this.overlay_D445A4FF_90F2_4190_41D1_873F20CA65DE",
  "this.overlay_D28F13FD_90F2_4790_41E1_BB2C0E999F0D",
  "this.overlay_D201AE2D_90F2_40B0_41A8_2F17808DA2EE",
  "this.overlay_D784028B_90ED_C070_41D9_C8A9975788BD"
 ],
 "hfovMin": "120%",
 "label": "women wash room",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 156.49,
   "yaw": -34.49,
   "panorama": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -11.67,
   "yaw": 21.62,
   "panorama": "this.panorama_8271C455_90F2_4091_41C3_9F219F955BE1",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 5.32,
   "yaw": 135.39,
   "panorama": "this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8274313B_90F2_4091_41AD_09E1B8343A90_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8189BBD6_95F0_F251_41E2_A18579703923",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 115,
  "yaw": 178.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_C4BD2BC0_9092_47F0_41B1_8B6D6072CB9D",
  "this.overlay_C434C9C6_9092_43F0_41C9_8E4651E2877A",
  "this.overlay_C1E4FD60_9092_C0AF_419A_2826820CDD44",
  "this.overlay_D31E7602_906E_4070_41BD_D17303EADF51",
  "this.overlay_DF035B48_9073_C0F0_41B7_BE93517DAE6F",
  "this.overlay_DD20F33B_9072_4090_41D0_8EC053C62631",
  "this.overlay_DD065E00_9072_4070_41C7_B638C94FE7F4",
  "this.overlay_DD94F80F_9075_C070_41D2_45683D733401"
 ],
 "hfovMin": "120%",
 "label": "Reception and lobby 1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F6DEF7_909D_C191_41C9_27540513D101",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30"
  },
  {
   "backwardYaw": -21.11,
   "yaw": 91.63,
   "panorama": "this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41"
  },
  {
   "backwardYaw": -78.07,
   "yaw": -122.86,
   "panorama": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82BE2E3F_95F0_F5CF_41DC_A9CA0BA355F2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80B71CAA_95F0_F6F1_41D2_E3B83085724A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 88.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82C21E21_95F0_F5F3_41D3_748E2E9D9EE4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -15.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81690BF0_95F0_F251_41DA_71C38B95280D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 84.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DF0FE94_95F0_F2D1_41DB_A8F57E3B43DA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -66.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A081FCBB_91B2_4191_41D0_2E7EBCA98190",
  "this.overlay_A085DA2D_91B6_40B0_41D8_4EA75BF74931"
 ],
 "hfovMin": "120%",
 "label": "Child Care Room 1.2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_8284D938_909E_4090_41E0_17F4352B271A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.58,
   "yaw": -28.66,
   "panorama": "this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DA25EA9_95F0_F2F3_41AB_08C407F48DC7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -89.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80461CE0_95F0_F671_41D5_0B7F2CEE7AC9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 163.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8288FE46_95F0_F5B1_41B2_9E80598BB480",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DC45ADD_95F0_F253_41D7_1F66F4A58E27",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 176.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82167E86_95F0_F2B1_415B_A09CFE5236BB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 43.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8189EF1B_95F0_F3D7_41DB_2BB64A96C078",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 124.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F60C87_909E_C070_419F_4E723DF67A5F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81BB9F07_95F0_F3BF_41D0_DEB1DC3029BC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 102.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A6984385_9196_4071_41C2_7EC686F2F3B8",
  "this.overlay_D87406A9_91EE_C1B1_4198_9878DC08C156"
 ],
 "hfovMin": "120%",
 "label": "Child Care Room 2.2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 22.14,
   "yaw": 11.5,
   "panorama": "this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_t.jpg"
},
{
 "closeButtonBackgroundColorRatios": [],
 "id": "window_A685658E_906F_C070_41D7_10CEBE83AE87",
 "contentOpaque": false,
 "paddingLeft": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "width": 200,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "borderSize": 0,
 "footerHeight": 5,
 "shadowOpacity": 0.5,
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "verticalAlign": "middle",
 "closeButtonIconWidth": 12,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "borderRadius": 5,
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "title": "Men Bathroom ",
 "shadowBlurRadius": 6,
 "class": "Window",
 "height": 200,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "headerPaddingBottom": 10,
 "gap": 10,
 "paddingTop": 0,
 "titleFontSize": "2vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "bodyBorderColor": "#000000",
 "backgroundOpacity": 1,
 "veilColorDirection": "horizontal",
 "headerPaddingLeft": 10,
 "children": [
  "this.htmlText_A685158E_906F_C070_41DE_A5F64ED4B106"
 ],
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingRight": 5,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "horizontalAlign": "center",
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "shadowSpread": 1,
 "titleFontStyle": "normal",
 "layout": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingRight": 5,
 "shadowHorizontalLength": 3,
 "data": {
  "name": "Window107674"
 },
 "headerPaddingTop": 10,
 "titlePaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_810F8C49_95F0_F5B3_41D5_D827E23989A2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -166.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82699E54_95F0_F251_41DD_C0C7D1D2EC56",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -123.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_850E6FBF_9096_DF91_41CD_FA25B164F9C9",
  "this.overlay_8450646A_9096_40B0_41C2_99EBD8535228",
  "this.overlay_871F02BB_9092_C190_41C9_A0403F9122F3",
  "this.overlay_8404BF1C_90AE_C090_41DE_7FBEB1D391E7",
  "this.overlay_87B20E7A_90B3_C090_41C1_FEE5DDAB1636"
 ],
 "hfovMin": "120%",
 "label": "Elevators Core 1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.43,
   "yaw": -164.39,
   "panorama": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 90.43,
   "yaw": 161.67,
   "panorama": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 161.81,
   "yaw": -1.68,
   "panorama": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 1115,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_86584CCD_9077_C1F0_41C4_F46FA6A87419",
  "this.overlay_894C1B64_9076_40B0_41CA_02CE1297CCFA",
  "this.overlay_8687F075_9075_C091_41D6_8BF3E2C960E0",
  "this.overlay_8BF13C9A_9072_4193_41D2_E8F6C80D6739",
  "this.overlay_8A0215CC_906F_C3F0_41CE_26430386C589"
 ],
 "hfovMin": "120%",
 "label": "Gym 1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 21.08,
   "yaw": 12.84,
   "panorama": "this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -90.26,
   "yaw": -148.6,
   "panorama": "this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -90.26,
   "yaw": 152.55,
   "panorama": "this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81875F14_95F0_F3D1_41DD_5BC9672BD3BB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 173.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A515D927_90AE_40B0_41D7_5910A904B162",
  "this.overlay_BCADE62E_90AD_C0B3_41CD_32DDACB2C81F",
  "this.overlay_BD19F9F5_90B6_C391_41E0_440032101681",
  "this.overlay_A059BB68_90B6_C0BF_41CF_840B523D4E77"
 ],
 "hfovMin": "120%",
 "label": "Function 2.1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -54.05,
   "yaw": 41.7,
   "panorama": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 12.18,
   "yaw": -106.56,
   "panorama": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_808DACBE_95F0_F6D0_41CF_157209186A1B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 29.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_876BD15D_90B2_4090_41DC_37802F727FC8",
  "this.overlay_86D6FA9D_90B6_C191_41C4_42EDD52D4041",
  "this.overlay_87513125_90B2_40B0_41BC_6E46EDC312FF",
  "this.overlay_86A21E2D_90B2_C0B0_41D0_B1F8A07FCFC4",
  "this.overlay_87920C49_90AF_C0F0_41C7_7C8DC19F09D1",
  "this.overlay_873CDDC9_90AE_43F1_41DD_F5FC05968F7D",
  "this.overlay_8683A418_909E_4090_41B3_7545FD684ECD"
 ],
 "hfovMin": "120%",
 "label": "Lounge",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_8273A891_90F2_4190_41C5_69387F913932",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -164.39,
   "yaw": 90.43,
   "panorama": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 147.74,
   "yaw": 5.32,
   "panorama": "this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -157.69,
   "yaw": 165.24,
   "panorama": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -157.69,
   "yaw": -167.3,
   "panorama": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_t.jpg"
},
{
 "items": [
  {
   "camera": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471_camera",
   "media": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8273A891_90F2_4190_41C5_69387F913932_camera",
   "media": "this.panorama_8273A891_90F2_4190_41C5_69387F913932",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB_camera",
   "media": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_camera",
   "media": "this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_camera",
   "media": "this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_camera",
   "media": "this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F_camera",
   "media": "this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_camera",
   "media": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4_camera",
   "media": "this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_camera",
   "media": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_camera",
   "media": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F6DEF7_909D_C191_41C9_27540513D101_camera",
   "media": "this.panorama_82F6DEF7_909D_C191_41C9_27540513D101",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41_camera",
   "media": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_camera",
   "media": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8_camera",
   "media": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6_camera",
   "media": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_camera",
   "media": "this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D_camera",
   "media": "this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_camera",
   "media": "this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_camera",
   "media": "this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_camera",
   "media": "this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8284D938_909E_4090_41E0_17F4352B271A_camera",
   "media": "this.panorama_8284D938_909E_4090_41E0_17F4352B271A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_camera",
   "media": "this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_camera",
   "media": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_camera",
   "media": "this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_camera",
   "media": "this.panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_camera",
   "media": "this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A_camera",
   "media": "this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126_camera",
   "media": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82700584_90F2_4070_41B8_7E70E55B5938_camera",
   "media": "this.panorama_82700584_90F2_4070_41B8_7E70E55B5938",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_camera",
   "media": "this.panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90_camera",
   "media": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_camera",
   "media": "this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_camera",
   "media": "this.panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_camera",
   "media": "this.panorama_820D700B_90F2_4071_41D8_54F5F8A2E133",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_camera",
   "media": "this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8271C455_90F2_4091_41C3_9F219F955BE1_camera",
   "media": "this.panorama_8271C455_90F2_4091_41C3_9F219F955BE1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_camera",
   "media": "this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_camera",
   "media": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81C5CB78_95F0_F251_41DB_12BD491FBF94",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 62.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81BC2F0E_95F0_F3B1_41DA_95B942E0D9CC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 102.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_827A5E5C_95F0_F251_41BB_81111BA4ED79",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 151.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FE3648_909E_40FF_41B9_8538CC50784D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F08002_909E_4073_41A6_BFDAF0599E41_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_AAF2B3EF_91B2_47B0_41D9_7CD6B16BAE57",
  "this.overlay_A9934052_91B3_C090_41E2_5F632E20C488",
  "this.overlay_A5335F88_91BD_C07F_41DB_7155BA1024AD",
  "this.overlay_A77C3C8C_91BE_4077_41DF_AD86237C2519"
 ],
 "hfovMin": "120%",
 "label": "Child Care Room 1.1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_8373587C_909E_4090_41E0_5FDFEAD79E18",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 56.11,
   "yaw": 82.2,
   "panorama": "this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -28.66,
   "yaw": -95.58,
   "panorama": "this.panorama_8284D938_909E_4090_41E0_17F4352B271A",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F51E44_909E_40F7_41C3_AA968A97F471_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81AABEF3_95F0_F257_419A_E09C1A25493E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -18.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81A18BA3_95F0_F2F7_41D5_AC580320B96B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -90.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F7C238_909E_4090_41CE_2C384381DB1A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_B66CE661_93F5_C0B1_41E0_2BD0D4680B28",
  "this.overlay_8CBF4C99_93F2_4190_41C0_CA31E3D0F4AF",
  "this.overlay_8DD7D005_93F3_C070_41C3_9F47439AA494",
  "this.overlay_B3292615_93EE_4091_4182_40B6B81CB3A8",
  "this.overlay_B32CED6E_93ED_C0B0_41D4_EBC40CBA7077",
  "this.overlay_B243783D_9396_4091_41E0_2E9F8FB9811D",
  "this.overlay_B3D5D650_939D_C090_41CF_6DDC50B00CBF",
  "this.overlay_B33A0F08_939E_4070_41DC_B52D7D679E09",
  "this.overlay_B0EA63CF_9397_C7F1_41DB_2B24DE5F1998",
  "this.overlay_B3F7183A_9395_C093_41B0_C158339B4C00",
  "this.overlay_B0C496CD_9392_41F0_41D4_7BAD9C0D4FC9"
 ],
 "hfovMin": "120%",
 "label": "Coffee lounge 2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F443FF_909E_4790_41D6_7705F9CAEB30",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59"
  },
  {
   "backwardYaw": 12.18,
   "yaw": 89.57,
   "panorama": "this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -163.7,
   "yaw": -117.88,
   "panorama": "this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -167.99,
   "yaw": -163.7,
   "panorama": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -167.99,
   "yaw": 172.62,
   "panorama": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 2.4,
   "yaw": 5.74,
   "panorama": "this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8336CDE5_95F0_F673_41D5_273EF0FA2994",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 145.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80CCBC8A_95F0_F6B1_41D0_EA9D26E540F1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -44.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_87A53EF9_95F0_3253_41DD_557E79F0CA4F",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_8257DA83_95F0_F2B7_41C5_F8259074D4E3",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80E05C5F_95F0_F64F_41E1_903C4981B2FA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 27.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81B97BC5_95F0_F2B3_41B1_96D1173B6765",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 31.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_D0350E99_90AE_C190_41B3_8AFA377E0E3F",
  "this.overlay_D188A73F_90AE_4090_41A6_3D6BDA5C4298",
  "this.overlay_D13F20B9_90B2_4191_41D4_910F3B30A3FD",
  "this.overlay_D23F5376_90B2_C090_41D7_43ADBB232B40",
  "this.overlay_D376B4B5_90BE_4190_41CC_4E27CAFD1A4E",
  "this.overlay_DEF617E3_90BE_CFB0_41C4_A099C0491617",
  "this.overlay_DDB595DC_90B2_4390_41DE_94F22C24FEE9"
 ],
 "hfovMin": "120%",
 "label": "changing room women 3",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 72.58,
   "yaw": -79.74,
   "panorama": "this.panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 87.86,
   "yaw": 33.12,
   "panorama": "this.panorama_820D700B_90F2_4071_41D8_54F5F8A2E133",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -34.49,
   "yaw": 156.49,
   "panorama": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -34.49,
   "yaw": -163.18,
   "panorama": "this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83101E03_95F0_F5B7_41D2_6163B3BB4774",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -154.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F64A0F_909E_C070_41D4_73599B951CC4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_BCFA92E7_9097_C1B0_41C8_4DDDEC25DE26",
  "this.overlay_BF3A6979_90F2_C090_41DB_FC8644D858FC",
  "this.overlay_BCEF42BE_90F3_C190_41E1_7F87BE82A63B",
  "this.overlay_BF96FC81_90F2_C071_41CF_BB152892DFD7",
  "this.overlay_BC1447BD_90EF_CF89_41E2_35480D936662",
  "this.overlay_BF7E3103_9092_4070_41E2_42CD313965F8"
 ],
 "hfovMin": "120%",
 "label": "Function 1.2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FBC736_909E_4093_41D3_ABF7AE83D568",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -6.69,
   "yaw": -129.72,
   "panorama": "this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -55.42,
   "yaw": -67.26,
   "panorama": "this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -106.56,
   "yaw": 12.18,
   "panorama": "this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A7D7BEEB_90F3_C1B0_41CF_4039CA9B0EE4",
  "this.overlay_BE1AC527_90F2_40B0_41CE_DCF362A37748",
  "this.overlay_BE3A884D_90F2_40F0_41A8_2CF1C7B8D201",
  "this.overlay_BF298913_90F2_C090_41C4_89648E56AA5F"
 ],
 "hfovMin": "120%",
 "label": "Function 2.2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F233A9_909D_C7B0_41DA_569903A4AE15",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -140.88,
   "yaw": 25.74,
   "panorama": "this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 41.7,
   "yaw": -54.05,
   "panorama": "this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82259E70_95F0_F251_41D6_2B98D20798F9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 16.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83A13D4D_95F0_F7B3_41E0_B9FB5BC6FB71",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 89.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DD3FAE8_95F0_F271_41B5_3CE03CBD4BEE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 176.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820FACE2_90F2_C1B3_41CD_C57546703126_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A8395CC6_9095_C1F0_41A6_7A90495A0C10",
  "this.overlay_AFF46AE4_9092_41B0_41E1_573EDABE40D2",
  "this.overlay_AF78BA50_9092_4090_41D6_69D87E05296D",
  "this.overlay_AE00C618_90AE_C09F_41DD_38F90DC87266",
  "this.overlay_D3B67D7B_90B2_4090_41D2_DBC763133816",
  "this.overlay_AE166394_90B2_4790_41D7_0683F4B98780"
 ],
 "hfovMin": "120%",
 "label": "changing room men",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 146.88,
   "yaw": -77.56,
   "panorama": "this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -0.86,
   "yaw": 113.42,
   "panorama": "this.panorama_82700584_90F2_4070_41B8_7E70E55B5938",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -31.53,
   "yaw": -16.3,
   "panorama": "this.panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A2D2ACF3_9192_4190_41D6_867B00A3C625",
  "this.overlay_A1847834_9193_C090_41DF_F6BE5684EA41",
  "this.overlay_A7476D92_9192_C393_41B5_657D15456BAC",
  "this.overlay_A67B9E4A_9192_40F0_41C4_FB5694479DC7",
  "this.overlay_A1B41C46_9192_C0F3_41CB_CE5AD510125D",
  "this.overlay_A6AD6467_91AE_40B0_41C7_B5C602EF1314",
  "this.overlay_A796FA99_91B6_4191_4189_79FAB2813C11"
 ],
 "hfovMin": "120%",
 "label": "Child Care Room 1.3",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -91.97,
   "yaw": -155.98,
   "panorama": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -91.97,
   "yaw": 149.63,
   "panorama": "this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 82.2,
   "yaw": 56.11,
   "panorama": "this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -150.49,
   "yaw": -75.67,
   "panorama": "this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82700584_90F2_4070_41B8_7E70E55B5938_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8022DCF1_95F0_F653_41D6_94A718B7EC76",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -32.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DD8EAF2_95F0_F251_41DC_49920939F433",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -23.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "audio": {
  "mp3Url": "media/audio_81452753_95F0_7257_41C1_E93955E740DE.mp3",
  "oggUrl": "media/audio_81452753_95F0_7257_41C1_E93955E740DE.ogg",
  "class": "AudioResource"
 },
 "data": {
  "label": "business-corporate-background-127557"
 },
 "id": "audio_81452753_95F0_7257_41C1_E93955E740DE",
 "autoplay": true,
 "class": "MediaAudio"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80C61C7F_95F0_F64F_41B7_0AC6CF5C2784",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 172.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DC17E9B_95F0_F2D7_41D3_E1CA28AACD12",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -152.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A61A5DCF_9196_43F1_41E2_1C72924B2804",
  "this.overlay_A68FAC50_9192_40EF_41CA_DB3321D9BBDD",
  "this.overlay_DFC8FECE_91F2_41F0_41DC_D626FC0DAC24"
 ],
 "hfovMin": "120%",
 "label": "Manager's office",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 41.53,
   "yaw": -136.93,
   "panorama": "this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_t.jpg"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 753,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Screenshot 2023-01-09 123428",
 "id": "map_87A53EF9_95F0_3253_41DD_557E79F0CA4F",
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_87A53EF9_95F0_3253_41DD_557E79F0CA4F.png",
    "width": 1063,
    "class": "ImageResourceLevel",
    "height": 753
   },
   {
    "url": "media/map_87A53EF9_95F0_3253_41DD_557E79F0CA4F_lq.png",
    "width": 304,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 216
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "width": 1063,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_87A53EF9_95F0_3253_41DD_557E79F0CA4F_t.png",
 "initialZoomFactor": 1
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81025C3F_95F0_F5CF_41B7_BCA319EAD125",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -167.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DEB1AB9_95F0_F2D3_41C3_2BDDCA7EC3AA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -101.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83985D8A_95F0_F6B1_41BE_3525E0F6E089",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 30.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_ADB773EF_90B6_47B0_41A5_218F8878E775",
  "this.overlay_ADF79E42_90B6_40F0_41BD_87B18CD99D10",
  "this.overlay_D5EF3405_90B2_4071_41C6_9995B331176D",
  "this.overlay_AA15A93E_90B5_C090_41C6_6C888040649B"
 ],
 "hfovMin": "120%",
 "label": "changing room men 2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.3,
   "yaw": -31.53,
   "panorama": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80D8EC96_95F0_F6D1_41C6_8B4B54C2E409",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 100.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "closeButtonBackgroundColorRatios": [],
 "id": "window_A3C008FF_9072_C190_41D3_A65F83F83FA3",
 "contentOpaque": false,
 "paddingLeft": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "width": 200,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "borderSize": 0,
 "footerHeight": 5,
 "shadowOpacity": 0.5,
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "verticalAlign": "middle",
 "closeButtonIconWidth": 12,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "borderRadius": 5,
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "title": "Women Bathroom ",
 "shadowBlurRadius": 6,
 "class": "Window",
 "height": 200,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "headerPaddingBottom": 10,
 "gap": 10,
 "paddingTop": 0,
 "titleFontSize": "2vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "headerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "bodyBorderColor": "#000000",
 "backgroundOpacity": 1,
 "veilColorDirection": "horizontal",
 "headerPaddingLeft": 10,
 "children": [
  "this.htmlText_A3C258FF_9072_C190_4181_D9303AF1DF6D"
 ],
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingRight": 5,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "horizontalAlign": "center",
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [],
 "shadowSpread": 1,
 "titleFontStyle": "normal",
 "layout": "vertical",
 "titlePaddingBottom": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Century Gothic",
 "scrollBarMargin": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingRight": 5,
 "shadowHorizontalLength": 3,
 "data": {
  "name": "Window106958"
 },
 "headerPaddingTop": 10,
 "titlePaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8236EE78_95F0_F251_41C5_1AB42B14D250",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -78.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81B72F01_95F0_F3B3_41C2_DE014C2EC557",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 172.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_8B7319AA_9395_C3B0_41C6_DA4ECFFF4926",
  "this.overlay_8A366843_9396_C0F0_41AF_AE7B2FAB5976",
  "this.overlay_8A7E043B_9396_4090_41D5_630462FBA79E",
  "this.overlay_8809D2FE_9392_4190_41CA_683948435D9E",
  "this.overlay_8976CA60_9396_40B0_41C8_602722D558D5"
 ],
 "hfovMin": "120%",
 "label": "Elevators Core 2",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F60C87_909E_C070_419F_4E723DF67A5F",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.68,
   "yaw": 161.81,
   "panorama": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -1.68,
   "yaw": -160.61,
   "panorama": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -1.68,
   "yaw": -172.73,
   "panorama": "this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -161.12,
   "yaw": -3.09,
   "panorama": "this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_t.jpg"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8344FDBA_95F0_F6D1_41C0_3FD28E67FDAE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -158.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83F58D24_95F0_F7F1_41DD_2333627FE3E3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 38.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_80193D12_95F0_F7D1_41C8_41BF5AD490A1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 101.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_81926F22_95F0_F3F1_41B3_7E305F3D60ED",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 73.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_803E9D02_95F0_F7B1_41E2_4B0483B0E7B5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 22.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_824A7E62_95F0_F271_41A5_CC517552198E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 16.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_AB41A68E_91AD_C070_41CA_1E0D356D396E",
  "this.overlay_A543A607_91B2_C071_41DF_528A0566B6AA",
  "this.overlay_ABEC861B_9196_4090_41DF_509BD895B95B",
  "this.overlay_A4FA0A25_9192_40B1_41E1_F98B0B5322C2"
 ],
 "hfovMin": "120%",
 "label": "Corridor 1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82F7C238_909E_4090_41CE_2C384381DB1A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 164.73,
   "yaw": 13.04,
   "panorama": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -3.26,
   "yaw": -159.24,
   "panorama": "this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8157EC15_95F0_F5D3_41C5_B2C3708B84B6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -174.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83EAED1C_95F0_F7D1_41D5_3A311E8451F6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 50.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8DA63AFB_95F0_F257_41B1_39F7DC685C79",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 168.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/f/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/f/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/u/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/u/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/r/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/r/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/b/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/b/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/d/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/d/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/l/0/{row}_{column}.jpg",
      "height": 3072,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/l/1/{row}_{column}.jpg",
      "height": 1536,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_A88A285F_909E_C091_41D4_7B8D73E57E9C",
  "this.overlay_AFBBD5B7_909F_C390_41AD_E137D3B85B52",
  "this.overlay_AEC7D40C_909E_4070_41E2_6A461CE89811",
  "this.overlay_ADD8F93A_90BE_C090_41E1_8B8A7FED16C6",
  "this.overlay_AD617831_90BD_C091_41DD_95D5CF488865"
 ],
 "hfovMin": "120%",
 "label": "wash room 1",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_82700584_90F2_4070_41B8_7E70E55B5938",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.42,
   "yaw": -0.86,
   "panorama": "this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 27.13,
   "yaw": 150.31,
   "panorama": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 27.13,
   "yaw": -161.47,
   "panorama": "this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_82DC1E30_95F0_F5D1_41D4_789BE2B4FED4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -167.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_83BDDD6A_95F0_F671_41D4_F05E91D6A2C3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": -174.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_838EDD7D_95F0_F653_41AD_AA464EC274AC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 110,
  "yaw": 30.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_8196BBDF_95F0_F24F_41DE_3631BCDB0C6B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 115,
  "yaw": 178.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "toolTipPaddingBottom": 7,
 "toolTipDisplayTime": 600,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "minHeight": 50,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "propagateClick": true,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipPaddingLeft": 10,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "paddingTop": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 13,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingRight": 0,
 "progressLeft": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipBorderSize": 1,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingRight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderRadius": 3,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0
},
{
 "backgroundOpacity": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "gap": 10,
 "paddingLeft": 0,
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0.64,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "gap": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "bottom": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "borderRadius": 0,
 "height": 118,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.6,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--REALTOR"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 },
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8273A891_90F2_4190_41C5_69387F913932, this.camera_8157EC15_95F0_F5D3_41C5_B2C3708B84B6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0_HS_0_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 147.74,
   "hfov": 69.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.16
  }
 ],
 "id": "overlay_87193238_9096_409F_41D7_644AB64AF5BA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.51,
   "image": "this.AnimatedImageResource_C8E37959_9096_C091_41CB_7C0A49B665F2",
   "pitch": 1.29,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 151.51,
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.29
  }
 ],
 "id": "overlay_864A3D22_9072_40B3_41E0_D6505D4F066F",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B, this.camera_8123CC20_95F0_F5F1_41DC_D6461AD72D7D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ]
   },
   "yaw": 21.08,
   "hfov": 63.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.38
  }
 ],
 "id": "overlay_86488334_9072_C097_41B8_F371A48EF050",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 18.56,
   "image": "this.AnimatedImageResource_C8E3195A_9096_C093_41C2_AD80E9A28354",
   "pitch": -4.74,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 18.56,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.74
  }
 ],
 "id": "overlay_868835D7_9076_C390_41D2_1EC564ABB951",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5, this.camera_8344FDBA_95F0_F6D1_41C0_3FD28E67FDAE); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D0B2FA96_9093_C193_41BB_AB0DDB56E352",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -12.93,
   "image": "this.AnimatedImageResource_D8F1D754_907D_C090_41DD_24CF736C7AD5",
   "pitch": -45.43,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_1_HS_1_0_6_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -12.93,
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.43
  }
 ],
 "id": "overlay_D733F952_9095_C090_41D1_2AC506C2F516",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6, this.camera_838EDD7D_95F0_F653_41AD_AA464EC274AC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_B3EE7F48_93AE_40FF_41C7_44B871ABAB67",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6, this.camera_83985D8A_95F0_F6B1_41BE_3525E0F6E089); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_B078CA34_93AE_4090_41C5_73FCE540A5BC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_2_1_6_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -37.41,
   "hfov": 21.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.49
  }
 ],
 "id": "overlay_B0E1B80B_93B5_C070_41DD_C291950BB1E1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.32,
   "image": "this.AnimatedImageResource_D81F173A_907D_C091_41C8_C47FAE0F5DDC",
   "pitch": 2.54,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -33.32,
   "hfov": 3.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.54
  }
 ],
 "id": "overlay_B1BBEF80_93B6_C070_41D7_55ADD372418E",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.72,
   "image": "this.AnimatedImageResource_D81EC73B_907D_C090_41C5_71495165448C",
   "pitch": -1,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.72,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1
  }
 ],
 "id": "overlay_BB9D2821_90B2_40B1_41C1_E33443E67632",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.21,
   "image": "this.AnimatedImageResource_C8F1E975_9096_C090_41BD_40CD8BE30AB2",
   "pitch": -2.8,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -174.21,
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.8
  }
 ],
 "id": "overlay_A0E0C5F3_90BE_4390_41A1_D1A88C1C1B02",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30, this.camera_83BDDD6A_95F0_F671_41D4_F05E91D6A2C3); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_6_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ]
   },
   "yaw": 2.4,
   "hfov": 61.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.24
  }
 ],
 "id": "overlay_C57C9831_91B5_C091_41E1_9B6983E406F4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5, this.camera_80CCBC8A_95F0_F6B1_41D0_EA9D26E540F1); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_0_1_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 5.32,
   "hfov": 70.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.64
  }
 ],
 "id": "overlay_AB76D5AC_9092_43B0_41D4_C3FF09C50937",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126, this.camera_80FA1C77_95F0_F65F_41D9_F906F78F3E9B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D6A6077F_90F6_4090_41E2_3D361CECF949",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126, this.camera_80C61C7F_95F0_F64F_41B7_0AC6CF5C2784); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_2_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D646A454_90F7_C090_41C9_FD5B3BAC364E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 11.46,
   "image": "this.AnimatedImageResource_D8F0B754_907D_C090_41E0_B4523DDD4311",
   "pitch": -12.28,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 11.46,
   "hfov": 5.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.28
  }
 ],
 "id": "overlay_D09B7797_90F2_4F91_41E0_FC9F508B449F",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.26,
   "image": "this.AnimatedImageResource_D8F01754_907D_C090_41BC_BACB6C585B69",
   "pitch": -8.95,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -173.26,
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.95
  }
 ],
 "id": "overlay_D529B206_90FE_C070_41B1_18A91D8454A3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59, this.camera_8369CD98_95F0_F6D1_41BF_7570993FECC2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_1_HS_0_1_0_map.gif",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 78.76,
   "hfov": 39.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.68
  }
 ],
 "id": "overlay_8E67AE56_9396_C090_41E0_6EFD8EA3C136",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6DEF7_909D_C191_41C9_27540513D101, this.camera_83749DA5_95F0_F6F3_41DE_9A0B128D64B7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_1_HS_1_1_0_map.gif",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -21.11,
   "hfov": 48.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.49
  }
 ],
 "id": "overlay_8FA051E8_9395_C3BF_41A2_BAAFFEEF22E4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0_HS_2_1_0_map.gif",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 41.94,
   "hfov": 31.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.2
  }
 ],
 "id": "overlay_8ED0E021_939D_C0B0_41A9_E0F3B2106BBA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 77.88,
   "image": "this.AnimatedImageResource_C8E5F961_9096_C0B0_41D6_15EE671FBA23",
   "pitch": -4.2,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 77.88,
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.2
  }
 ],
 "id": "overlay_8CC3D530_9392_4090_41E1_18D3EE18425C",
 "data": {
  "label": "Circle Generic 04"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.34,
   "image": "this.AnimatedImageResource_D8208700_907D_C070_41DF_9C1BD7FEAAE4",
   "pitch": -30.36,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -14.34,
   "hfov": 4.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.36
  }
 ],
 "id": "overlay_8FB15173_9393_C091_41E0_85C8EDBBE1C5",
 "data": {
  "label": "Circle Generic 04"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 41.23,
   "image": "this.AnimatedImageResource_C8E59961_9096_C0B0_41AE_7B114162A9BA",
   "pitch": -7.02,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 41.23,
   "hfov": 4.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.02
  }
 ],
 "id": "overlay_8C6747CF_9392_4FF0_41DA_1745B1EC9BAF",
 "data": {
  "label": "Circle Generic 04"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B, this.camera_81B97BC5_95F0_F2B3_41B1_96D1173B6765); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "yaw": -90.26,
   "hfov": 97.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.42
  }
 ],
 "id": "overlay_8602E27C_907E_C097_41E0_F3659D6D0908",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.71,
   "image": "this.AnimatedImageResource_C8E0795A_9096_C093_41C1_7C5E904F7920",
   "pitch": -8.48,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.71,
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.48
  }
 ],
 "id": "overlay_8BDB8F6B_9073_C0B0_41D8_A073D8086F2C",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A, this.camera_810F8C49_95F0_F5B3_41D5_D827E23989A2); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_0_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 164.73,
   "hfov": 31.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.84
  }
 ],
 "id": "overlay_ABC38E9F_906E_C190_41CD_AE9CC51A6F00",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A, this.camera_81140C56_95F0_F651_41BA_E23BE37297B4); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A9889738_906E_C090_41C7_0DA023BBC397",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0, this.camera_80E05C5F_95F0_F64F_41E1_903C4981B2FA); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_2_1_6_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -7.04,
   "hfov": 32.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.12
  }
 ],
 "id": "overlay_AB2209E6_9072_C3B3_41D3_C965B6C94620",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82700584_90F2_4070_41B8_7E70E55B5938, this.camera_80EC4C6B_95F0_F677_41D3_33CE4F931752); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_3_1_6_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 27.13,
   "hfov": 38.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.52
  }
 ],
 "id": "overlay_AED650B2_9077_C190_41C5_15ED8A0957CB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.82,
   "image": "this.AnimatedImageResource_D80B874C_907D_C0F7_41B3_F28A5FA2A01A",
   "pitch": -1.18,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -4.82,
   "hfov": 4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.18
  }
 ],
 "id": "overlay_ABC2A20F_9075_C070_41DB_2457252DB668",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.55,
   "image": "this.AnimatedImageResource_D80B574C_907D_C0F7_41E2_A6C33D9A67D2",
   "pitch": 0.94,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 16.55,
   "hfov": 5.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.94
  }
 ],
 "id": "overlay_AB92F600_9073_C070_41DA_CEEBDDC4DECB",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.88,
   "image": "this.AnimatedImageResource_D80CE74C_907D_C0F7_41C8_73A07F1DF941",
   "pitch": -17.42,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_6_0_6_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 175.88,
   "hfov": 3.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.42
  }
 ],
 "id": "overlay_ADA5B456_90B2_4090_41D2_83F42BA24DF7",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41, this.camera_8206EE7F_95F0_F24F_41B0_0E7B55C673F7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_B6058D02_93B3_C076_41E0_3DD22AE7242A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6DEF7_909D_C191_41C9_27540513D101, this.camera_8DE0AE8D_95F0_F2B3_41DC_57EA1277D9F0); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_1_1_6_map.gif",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -78.07,
   "hfov": 53.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.71
  }
 ],
 "id": "overlay_B70BADCA_93B2_C3F0_41DB_86122D8677D1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32, this.camera_8236EE78_95F0_F251_41C5_1AB42B14D250); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_2_1_6_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -7.89,
   "hfov": 73.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.2
  }
 ],
 "id": "overlay_B62E55B3_93AE_4390_41E1_1183F126C9F3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30, this.camera_824A7E62_95F0_F271_41A5_CC517552198E); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_3_1_6_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -167.99,
   "hfov": 24.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3
  }
 ],
 "id": "overlay_B784FB4C_93AD_C0F0_41D4_E5722D286E1E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_4_1_6_map.gif",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -118.06,
   "hfov": 33.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.95
  }
 ],
 "id": "overlay_B45A024C_9392_40F0_4188_8D0FA8D555F6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02, this.camera_82167E86_95F0_F2B1_415B_A09CFE5236BB); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_5_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_5_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_5_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_5_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_B55D749C_9397_C197_41D3_C3401B27090F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30, this.camera_82543E6A_95F0_F271_4198_E421855B342C); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_6_1_6_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 173.31,
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.81
  }
 ],
 "id": "overlay_BB0A5CC4_9392_41F7_419B_7B8E73FAB70C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 35.23,
   "image": "this.AnimatedImageResource_D811E732_907D_C093_41E0_A14540D5FC8E",
   "pitch": 6.09,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 35.23,
   "hfov": 3.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.09
  }
 ],
 "id": "overlay_BD59A129_90AD_C0B0_41CF_3EEA3EF29D3D",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.14,
   "image": "this.AnimatedImageResource_D8118732_907D_C093_4162_FD98FF6C6500",
   "pitch": 6.38,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.14,
   "hfov": 5.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.38
  }
 ],
 "id": "overlay_A071EFD6_9092_5F93_41C5_693E5350E272",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -119.26,
   "image": "this.AnimatedImageResource_D8115732_907D_C093_41E1_15A093A34E1F",
   "pitch": 9.17,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -119.26,
   "hfov": 4.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.17
  }
 ],
 "id": "overlay_A2DFFD87_9092_C070_41DF_536F93F31240",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30, this.camera_82259E70_95F0_F251_41D6_2B98D20798F9); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.52,
   "image": "this.AnimatedImageResource_D8113732_907D_C093_41D4_94BDB7B1FCD3",
   "pitch": -4.33,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_10_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -172.52,
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.33
  }
 ],
 "id": "overlay_A2A4DAA2_9092_41B0_41AD_D615EEC80EF2",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.05,
   "image": "this.AnimatedImageResource_D810F732_907D_C093_41CD_BE47B9970A0E",
   "pitch": 3.96,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_11_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 161.05,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.96
  }
 ],
 "id": "overlay_A0AE4BFB_909D_C791_41BD_61E443E7D2D6",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.61,
   "image": "this.AnimatedImageResource_D8104732_907D_C093_41CE_9806AB83A65F",
   "pitch": -21.77,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_12_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -4.61,
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.77
  }
 ],
 "id": "overlay_A2E69151_909E_4090_41DA_59AB89A7EF7F",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90, this.camera_81BB9F07_95F0_F3BF_41D0_DEB1DC3029BC); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D0B661AD_90B2_C3B0_41B1_80BEB5B5B4E9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.7,
   "image": "this.AnimatedImageResource_D8F73754_907D_C090_41C3_5BC9C943FD9E",
   "pitch": -33.08,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_1_0_6_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 172.7,
   "hfov": 4.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.08
  }
 ],
 "id": "overlay_AA549206_90B2_4070_41D9_BCF6129F1AAE",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90, this.camera_81BC2F0E_95F0_F3B1_41DA_95B942E0D9CC); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_2_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D4D51B52_90B3_C093_41C9_93E4E6C4ADBA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A, this.camera_81F8DB66_95F0_F271_41E2_3CC1191F1921); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D2CBD1B0_90AD_C390_41DB_1381F2BB3538",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.51,
   "image": "this.AnimatedImageResource_D8F56754_907D_C090_41CA_F33AF7FF2DD6",
   "pitch": 6.31,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 96.51,
   "hfov": 5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.31
  }
 ],
 "id": "overlay_D00FD279_90AE_4090_41BE_A58358DA981A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F7C238_909E_4090_41CE_2C384381DB1A, this.camera_809FDCC7_95F0_F6BF_41BB_B578DED890D8); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_1_HS_0_1_0_map.gif",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -3.26,
   "hfov": 40.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.01
  }
 ],
 "id": "overlay_A460B752_91AE_4090_41CD_30729115C7CD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.12,
   "image": "this.AnimatedImageResource_D838F6F8_907D_C190_41BD_5F6D8BF959AD",
   "pitch": -24.49,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.12,
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.49
  }
 ],
 "id": "overlay_A400E1F4_9196_4390_41D4_E901CD638307",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8273A891_90F2_4190_41C5_69387F913932, this.camera_806BCCD0_95F0_F651_41E0_F87BDC6D14A6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_1_HS_2_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_1_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A58BC5C2_9197_C3F3_41B9_A591984E017B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8273A891_90F2_4190_41C5_69387F913932, this.camera_8075CCD9_95F0_F653_41C4_FC22C3EC0834); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0_HS_3_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0_HS_3_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0_HS_3_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0_HS_3_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_AB6D4A7E_9196_C090_41BB_D8B4EB581B46",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 176.48,
   "image": "this.AnimatedImageResource_C8E2F959_9096_C091_41DA_A0A2F1DCAB92",
   "pitch": -0.37,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 176.48,
   "hfov": 3.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.37
  }
 ],
 "id": "overlay_D970ABD8_9096_4790_41D1_B042E0F2E140",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15, this.camera_83101E03_95F0_F5B7_41D2_6163B3BB4774); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_BF791EA2_9092_41B3_41D1_BDC65E1C12C3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15, this.camera_82E28E10_95F0_F5D1_41E0_F46BCB609812); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_BE757545_909E_C0F0_41DD_A6D09CE24B6F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568, this.camera_82F21E1A_95F0_F5D1_41D6_8691E25E4381); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_2_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ]
   },
   "yaw": -55.42,
   "hfov": 62.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.95
  }
 ],
 "id": "overlay_BCCDAC4D_909E_40F1_41D3_2EB96BB95CAB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_3_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "yaw": 1.54,
   "hfov": 57.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.81
  }
 ],
 "id": "overlay_BC953B6C_9092_40B7_41B9_8643C618516A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.84,
   "image": "this.AnimatedImageResource_D819973B_907D_C090_41C3_62CA98C47ED7",
   "pitch": -2.27,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -142.84,
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.27
  }
 ],
 "id": "overlay_BCA028FD_9096_4191_41C6_E0B8D8E7DA3C",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.66,
   "image": "this.AnimatedImageResource_D81AD73B_907D_C090_41D6_D37E291ACAF5",
   "pitch": 2.15,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -53.66,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.15
  }
 ],
 "id": "overlay_BDC459E7_9097_C3B0_41DB_DFC89A8EA782",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.44,
   "image": "this.AnimatedImageResource_D81AA73B_907D_C090_41E0_BAC4B2F1257C",
   "pitch": 0.22,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.44,
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.22
  }
 ],
 "id": "overlay_BD91FD1A_9097_C090_41D4_BE5A1B36430D",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "mp3Url": "media/audio_C0A870A6_90B2_C1B0_41D5_7D9207F0D024.mp3",
 "oggUrl": "media/audio_C0A870A6_90B2_C1B0_41D5_7D9207F0D024.ogg",
 "id": "audioresource_DA076E17_90B6_4090_41CF_01DE534307EB",
 "class": "AudioResource"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6, this.camera_81B72F01_95F0_F3B3_41C2_DE014C2EC557); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0_HS_0_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 101.41,
   "hfov": 76.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.59
  }
 ],
 "id": "overlay_B676FF93_93B3_FF91_41D8_304EC4F22D81",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A3C008FF_9072_C190_41D3_A65F83F83FA3, 10000, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -30.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_1_HS_1_0.png",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": 9.4,
   "hfov": 4.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "yaw": -30.73,
   "hfov": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.4
  }
 ],
 "id": "overlay_A2CB498E_9092_4070_41DA_358F1D626B78",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A685658E_906F_C070_41D7_10CEBE83AE87, 10000, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": 30.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_1_HS_2_0.png",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": 9.08,
   "hfov": 4.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "yaw": 30.09,
   "hfov": 4.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.08
  }
 ],
 "id": "overlay_BD07BA86_9093_C073_41DD_B1AB31B6AA73",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8, this.camera_81AD5EFA_95F0_F251_41DA_F64709871680); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0_HS_3_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -91.97,
   "hfov": 75.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.87
  }
 ],
 "id": "overlay_A29F3E82_9072_4073_41D5_DD33D8214FC6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 95.96,
   "image": "this.AnimatedImageResource_C8F89967_9096_C0B0_41CD_C422F349FD17",
   "pitch": -1.8,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 95.96,
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.8
  }
 ],
 "id": "overlay_A3D828EB_9192_C1B0_41E2_26FFF35784D8",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -94.36,
   "image": "this.AnimatedImageResource_D828672A_907D_C0B3_41E1_21663F3DB1DF",
   "pitch": 2.5,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -94.36,
   "hfov": 4.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.5
  }
 ],
 "id": "overlay_A2750092_9193_C190_41D2_70701D918972",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A, this.camera_80D8EC96_95F0_F6D1_41C6_8B4B54C2E409); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D09454F7_9096_4191_41C6_4477ACEF0807",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.41,
   "image": "this.AnimatedImageResource_D8F5C754_907D_C090_41CF_4AE8E74B0AC2",
   "pitch": -10.16,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 66.41,
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.16
  }
 ],
 "id": "overlay_D3E09524_9092_40B0_41CD_36167C27F80B",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08, this.camera_81B02BBC_95F0_F2D1_41BB_796FEC97A630); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ]
   },
   "yaw": 22.14,
   "hfov": 114.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.55
  }
 ],
 "id": "overlay_A70181ED_91B5_C3B0_41AA_C6277B2860D5",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8, this.camera_81AB6BAB_95F0_F2F7_41C2_D1D7F31B535D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A7322AB8_91B2_4190_41D7_EDF2020C2C32",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.31,
   "image": "this.AnimatedImageResource_D800B742_907D_C0F0_41D4_C4F0DCD6D8CB",
   "pitch": 1.43,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.31,
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.43
  }
 ],
 "id": "overlay_A68436F9_91AE_4190_41CB_7A2B0A2FA527",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.48,
   "image": "this.AnimatedImageResource_D8007742_907D_C0F0_41BE_3C1FE9705DCA",
   "pitch": -27.87,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_3_0_6_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -144.48,
   "hfov": 6.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.87
  }
 ],
 "id": "overlay_A787501C_9192_4090_41DA_47C3D1B0C31A",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8, this.camera_81AD0BB3_95F0_F2D7_41D2_104C90BA1226); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_4_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_4_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_4_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D9AEA8FE_9192_C190_41D8_DFAED85B3FF6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59, this.camera_81DFFB9B_95F0_F2D7_41C3_668D42FE4112); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_8FBD20DA_93EE_4190_41C7_0B9049226AD3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30, this.camera_81A18BA3_95F0_F2F7_41D5_AC580320B96B); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_1_1_6_map.gif",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 12.18,
   "hfov": 102.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.18
  }
 ],
 "id": "overlay_8FCC1556_93EE_C093_41DD_64600561A429",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.64,
   "image": "this.AnimatedImageResource_D82FB708_907D_C070_41DD_DEA284D7F4CA",
   "pitch": -8.75,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -105.64,
   "hfov": 4.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.75
  }
 ],
 "id": "overlay_8D5FE2D5_93F2_4190_41DE_FF52AC0312F8",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.37,
   "image": "this.AnimatedImageResource_D82F5708_907D_C070_41D8_5C117A0F2BBB",
   "pitch": -13.28,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.37,
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.28
  }
 ],
 "id": "overlay_8C5744C2_93F5_C1F0_41D6_7060AB8D38C3",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4, this.camera_8DEB1AB9_95F0_F2D3_41C3_2BDDCA7EC3AA); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_0_1_0_map.gif",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -80.48,
   "hfov": 38.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.12
  }
 ],
 "id": "overlay_88B1B8F3_93AE_4190_41D0_9FF28B245CEC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83, this.camera_8DF2BAC6_95F0_F2B1_41E0_98A358262FB7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": 98.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_1_0.png",
      "width": 964,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": -2.36,
   "roll": 0,
   "hfov": 64.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_1_1_0_map.gif",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 98.15,
   "hfov": 64.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.36
  }
 ],
 "id": "overlay_8BD89261_93AE_40B0_41CF_83741A486493",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41, this.camera_8DFF2AD0_95F0_F251_41D1_6E3B5F98C5CA); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ]
   },
   "yaw": 2.75,
   "hfov": 32.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.2
  }
 ],
 "id": "overlay_88C1ED82_93B2_4070_41E2_085EF6505415",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F, this.camera_8DC45ADD_95F0_F253_41D7_1F66F4A58E27); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_3_1_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -161.12,
   "hfov": 36.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.94
  }
 ],
 "id": "overlay_896F051A_93B6_4090_41A8_A58C99BF3E7C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F, this.camera_8DD3FAE8_95F0_F271_41B5_3CE03CBD4BEE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_4_1_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 172.11,
   "hfov": 15.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.12
  }
 ],
 "id": "overlay_8BCE5B53_93B6_4090_41D1_8F31EEA8BC38",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.21,
   "image": "this.AnimatedImageResource_C8E7B961_9096_C0B1_41B5_3FDB2B09B6E6",
   "pitch": -2.85,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -172.21,
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.85
  }
 ],
 "id": "overlay_8E001BAC_93B5_C7B0_41CF_F66A89687563",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -81.35,
   "image": "this.AnimatedImageResource_C8E47961_9096_C0B1_41AE_ED32E6A7E40E",
   "pitch": 1.58,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -81.35,
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.58
  }
 ],
 "id": "overlay_8923614B_93B3_C0F0_41D3_9D75E175319B",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.45,
   "image": "this.AnimatedImageResource_C8E43961_9096_C0B1_41C3_EC263DFF3CC5",
   "pitch": -6.47,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.45,
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.47
  }
 ],
 "id": "overlay_896AF62D_93BE_40B1_41E1_FF71DFBAC886",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 95.66,
   "image": "this.AnimatedImageResource_D8222700_907D_C070_41DA_A9B98ECAE3EE",
   "pitch": -32.26,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_8_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 95.66,
   "hfov": 9.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.26
  }
 ],
 "id": "overlay_8E5B832C_93AF_C0B0_41B2_B721EB4E11F0",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F443FF_909E_4790_41D6_7705F9CAEB30, this.camera_81C5CB78_95F0_F251_41DB_12BD491FBF94); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_0_1_0_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -163.7,
   "hfov": 30.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.97
  }
 ],
 "id": "overlay_B5B8A64A_9396_C0F0_41A0_75D4FAEB58CD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_1_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -135.73,
   "hfov": 25.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.81
  }
 ],
 "id": "overlay_BB1AB8DE_9395_C190_41D1_EA7A1EDACCC1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59, this.camera_81C3CB6F_95F0_F24F_41CE_C1B22BD7D679); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 131
     }
    ]
   },
   "yaw": -97.72,
   "hfov": 47.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.14
  }
 ],
 "id": "overlay_B82975A5_9392_43B1_41C5_AD1570BC63BA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6, this.camera_81C84B81_95F0_F2B3_41C6_5AD0435A73E0); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_3_1_0_map.gif",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -53.02,
   "hfov": 35.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.32
  }
 ],
 "id": "overlay_BA5007AD_9072_CFB0_41E2_22D3C2348A0D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.21,
   "image": "this.AnimatedImageResource_D814D732_907D_C093_41D5_5E59ECFC53FB",
   "pitch": -0.94,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -44.21,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.94
  }
 ],
 "id": "overlay_BB7B8F12_9075_C090_41DA_AB7ED6439ABC",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -102.32,
   "image": "this.AnimatedImageResource_D8149732_907D_C093_41D5_A53B8A96C44D",
   "pitch": 8.35,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -102.32,
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.35
  }
 ],
 "id": "overlay_BB5938F1_9077_C191_418A_2F9547505166",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -132.25,
   "image": "this.AnimatedImageResource_D8144732_907D_C093_41D1_A7F968ACCD03",
   "pitch": 7.07,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -132.25,
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.07
  }
 ],
 "id": "overlay_BBFEA377_9073_C091_41DE_577481325268",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158.98,
   "image": "this.AnimatedImageResource_D8142732_907D_C093_41AE_7DC0522E80FF",
   "pitch": -3.82,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -158.98,
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.82
  }
 ],
 "id": "overlay_B8DC1E6D_9072_C0B1_41DB_855C6C754DEB",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568, this.camera_83EAED1C_95F0_F7D1_41D5_3A311E8451F6); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_0_1_0_map.gif",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -6.69,
   "hfov": 59.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.18
  }
 ],
 "id": "overlay_B802C2C4_90BE_C1F7_41C2_B3E4433DF25A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8, this.camera_83F58D24_95F0_F7F1_41DD_2333627FE3E3); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_BE87BBEA_90B7_C7B3_41A8_D5DF0A3B6FDA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8, this.camera_83C68D2F_95F0_F7CF_419D_32D8E553BD66); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_B81BAF9C_90B2_5F90_41C9_B1663D328935",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.45,
   "image": "this.AnimatedImageResource_D81D073B_907D_C090_41D2_1D0F33FF43B6",
   "pitch": -0.8,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -16.45,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.8
  }
 ],
 "id": "overlay_BB449761_9093_C0B0_41D5_04A991836325",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 168.34,
   "image": "this.AnimatedImageResource_D81CD73B_907D_C090_4187_7FBACB8E09FD",
   "pitch": -0.7,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 168.34,
   "hfov": 5.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.7
  }
 ],
 "id": "overlay_B92D9397_9092_4790_41DE_232F471F64DC",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0, this.camera_8DB31B04_95F0_F3B1_41B4_9C14C0A3DDE4); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D6F880BD_90FE_4190_41CB_16424736679C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A, this.camera_8DD8EAF2_95F0_F251_41DC_49920939F433); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D625DD1F_90FD_C090_41D6_A5FD01563603",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8271C455_90F2_4091_41C3_9F219F955BE1, this.camera_8DA63AFB_95F0_F257_41B1_39F7DC685C79); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_2_1_6_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 21.62,
   "hfov": 61.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.61
  }
 ],
 "id": "overlay_D445A4FF_90F2_4190_41D1_873F20CA65DE",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.67,
   "image": "this.AnimatedImageResource_D8FE875C_907D_C097_41BE_F487284618BB",
   "pitch": -4.31,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 116.67,
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.31
  }
 ],
 "id": "overlay_D28F13FD_90F2_4790_41E1_BB2C0E999F0D",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16,
   "image": "this.AnimatedImageResource_D8FE575C_907D_C097_41D3_9B84018E1650",
   "pitch": -8.61,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 16,
   "hfov": 5.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.61
  }
 ],
 "id": "overlay_D201AE2D_90F2_40B0_41A8_2F17808DA2EE",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -26.45,
   "image": "this.AnimatedImageResource_D8FE075C_907D_C097_4195_63C1119C2D2C",
   "pitch": -13.93,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -26.45,
   "hfov": 5.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.93
  }
 ],
 "id": "overlay_D784028B_90ED_C070_41D9_C8A9975788BD",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6, this.camera_80193D12_95F0_F7D1_41C8_41BF5AD490A1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_0_1_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -122.86,
   "hfov": 69.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.92
  }
 ],
 "id": "overlay_C4BD2BC0_9092_47F0_41B1_8B6D6072CB9D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_1_1_0_map.gif",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -67.44,
   "hfov": 50.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.01
  }
 ],
 "id": "overlay_C434C9C6_9092_43F0_41C9_8E4651E2877A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "yaw": -22.14,
   "hfov": 44.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.74
  }
 ],
 "id": "overlay_C1E4FD60_9092_C0AF_419A_2826820CDD44",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F64A0F_909E_C070_41D4_73599B951CC4, this.camera_80080D0A_95F0_F7B1_41D5_55979C8EEE72); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_3_1_0_map.gif",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 91.63,
   "hfov": 103.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.31
  }
 ],
 "id": "overlay_D31E7602_906E_4070_41BD_D17303EADF51",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.75,
   "image": "this.AnimatedImageResource_C8FE0969_9096_C0B1_41DE_0D5A53501684",
   "pitch": 11.25,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 84.75,
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.25
  }
 ],
 "id": "overlay_DF035B48_9073_C0F0_41B7_BE93517DAE6F",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -61.69,
   "image": "this.AnimatedImageResource_D816F732_907D_C093_41D3_7500CBB5D4CA",
   "pitch": -1.69,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -61.69,
   "hfov": 4.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.69
  }
 ],
 "id": "overlay_DD20F33B_9072_4090_41D0_8EC053C62631",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.16,
   "image": "this.AnimatedImageResource_D816A732_907D_C093_41D7_BC79E68207CD",
   "pitch": -2.21,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -17.16,
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.21
  }
 ],
 "id": "overlay_DD065E00_9072_4070_41C7_B638C94FE7F4",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -143.84,
   "image": "this.AnimatedImageResource_D8166732_907D_C093_41B6_1060A1053AE2",
   "pitch": -24.74,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_7_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -143.84,
   "hfov": 4.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.74
  }
 ],
 "id": "overlay_DD94F80F_9075_C070_41D2_45683D733401",
 "data": {
  "label": "Circle Arrow 03b Left"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 },
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18, this.camera_81690BF0_95F0_F251_41DA_71C38B95280D); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 191
     }
    ]
   },
   "yaw": -28.66,
   "hfov": 114.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.75
  }
 ],
 "id": "overlay_A081FCBB_91B2_4191_41D0_2E7EBCA98190",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -27.61,
   "image": "this.AnimatedImageResource_D804E742_907D_C0F0_41E1_E93C1D2E657D",
   "pitch": -3.91,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -27.61,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.91
  }
 ],
 "id": "overlay_A085DA2D_91B6_40B0_41D8_4EA75BF74931",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D, this.camera_81956F28_95F0_F3F1_41D4_AE68A3823B17); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_1_HS_0_1_0_map.gif",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 11.5,
   "hfov": 77.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.89
  }
 ],
 "id": "overlay_A6984385_9196_4071_41C2_7EC686F2F3B8",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.66,
   "image": "this.AnimatedImageResource_D80F674A_907D_C0F0_41B6_CDD16A65B8B7",
   "pitch": -1.97,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 15.66,
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.97
  }
 ],
 "id": "overlay_D87406A9_91EE_C1B1_4198_9878DC08C156",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "backgroundOpacity": 0,
 "id": "htmlText_A685158E_906F_C070_41DE_A5F64ED4B106",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Montserrat';\">Men's Bathroom</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "data": {
  "name": "HTMLText107675"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8273A891_90F2_4190_41C5_69387F913932, this.camera_8DA25EA9_95F0_F2F3_41AB_08C407F48DC7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_0_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -164.39,
   "hfov": 42.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.56
  }
 ],
 "id": "overlay_850E6FBF_9096_DF91_41CD_FA25B164F9C9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8273A891_90F2_4190_41C5_69387F913932, this.camera_81A6BEEC_95F0_F271_41CB_A01157127600); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_8450646A_9096_40B0_41C2_99EBD8535228",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.64,
   "image": "this.AnimatedImageResource_C8EF0957_9096_C091_41C3_193FFC7D11FA",
   "pitch": -5.15,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -175.64,
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.15
  }
 ],
 "id": "overlay_871F02BB_9092_C190_41C9_A0403F9122F3",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F60C87_909E_C070_419F_4E723DF67A5F, this.camera_81AABEF3_95F0_F257_419A_E09C1A25493E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_3_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_3_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_3_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_3_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_8404BF1C_90AE_C090_41DE_7FBEB1D391E7",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.69,
   "image": "this.AnimatedImageResource_D83AC6F8_907D_C190_41DF_F32259E80B66",
   "pitch": -35.37,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_4_0_6_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.69,
   "hfov": 5.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.37
  }
 ],
 "id": "overlay_87B20E7A_90B3_C090_41C1_FEE5DDAB1636",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9, this.camera_83A13D4D_95F0_F7B3_41E0_B9FB5BC6FB71); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_86584CCD_9077_C1F0_41C4_F46FA6A87419",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9, this.camera_83ACBD5C_95F0_F651_41C3_DA801FADFD87); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_1_HS_1_1_6_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 152.55,
   "hfov": 60.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.18
  }
 ],
 "id": "overlay_894C1B64_9076_40B0_41CA_02CE1297CCFA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80, this.camera_83D03D38_95F0_F7D1_41D6_5E4225050460); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_1_HS_2_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "yaw": 12.84,
   "hfov": 59.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.22
  }
 ],
 "id": "overlay_8687F075_9075_C091_41D6_8BF3E2C960E0",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.87,
   "image": "this.AnimatedImageResource_D825D700_907D_C070_41CF_04B55E33E67B",
   "pitch": -4.9,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 173.87,
   "hfov": 5.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.9
  }
 ],
 "id": "overlay_8BF13C9A_9072_4193_41D2_E8F6C80D6739",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.9,
   "image": "this.AnimatedImageResource_C8E1595A_9096_C093_41CF_DD4787FB1857",
   "pitch": -2.4,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.9,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.4
  }
 ],
 "id": "overlay_8A0215CC_906F_C3F0_41CE_26430386C589",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FBC736_909E_4093_41D3_ABF7AE83D568, this.camera_81025C3F_95F0_F5CF_41B7_BCA319EAD125); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_1_HS_0_1_0_map.gif",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -106.56,
   "hfov": 76.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.88
  }
 ],
 "id": "overlay_A515D927_90AE_40B0_41D7_5910A904B162",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F233A9_909D_C7B0_41DA_569903A4AE15, this.camera_8135DC35_95F0_F5D3_41B2_84BFFDE66DF8); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_1_HS_1_1_0_map.gif",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 41.7,
   "hfov": 64.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.73
  }
 ],
 "id": "overlay_BCADE62E_90AD_C0B3_41CD_32DDACB2C81F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -102.33,
   "image": "this.AnimatedImageResource_D819F742_907D_C0F0_41D3_04D3C361BE39",
   "pitch": -15.32,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -102.33,
   "hfov": 3.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.32
  }
 ],
 "id": "overlay_BD19F9F5_90B6_C391_41E0_440032101681",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.69,
   "image": "this.AnimatedImageResource_D8194742_907D_C0F0_41D8_7EE6700243DE",
   "pitch": -3.38,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 40.69,
   "hfov": 5.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.38
  }
 ],
 "id": "overlay_A059BB68_90B6_C0BF_41CF_840B523D4E77",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471, this.camera_80519CE9_95F0_F673_41E1_121D6A4765B1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_1_HS_0_1_0_map.gif",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90.43,
   "hfov": 78.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.15
  }
 ],
 "id": "overlay_876BD15D_90B2_4090_41DC_37802F727FC8",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8272CAFB_90F2_C191_41C7_DB068A643F80, this.camera_8022DCF1_95F0_F653_41D6_94A718B7EC76); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_1_HS_1_1_0_map.gif",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 5.32,
   "hfov": 52.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.03
  }
 ],
 "id": "overlay_86D6FA9D_90B6_C191_41C4_42EDD52D4041",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB, this.camera_802C4CFA_95F0_F651_41D6_E63275731632); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_1_HS_2_1_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 165.24,
   "hfov": 30.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.26
  }
 ],
 "id": "overlay_87513125_90B2_40B0_41BC_6E46EDC312FF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB, this.camera_803E9D02_95F0_F7B1_41E2_4B0483B0E7B5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_1_HS_3_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -167.3,
   "hfov": 26.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.58
  }
 ],
 "id": "overlay_86A21E2D_90B2_C0B0_41D0_B1F8A07FCFC4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.35,
   "image": "this.AnimatedImageResource_C8EC8957_9096_C090_41C1_0380802228AE",
   "pitch": -1.42,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.35,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.42
  }
 ],
 "id": "overlay_87920C49_90AF_C0F0_41C7_7C8DC19F09D1",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.42,
   "image": "this.AnimatedImageResource_C8ED5957_9096_C090_41BF_D4EDF83C98F7",
   "pitch": -2.83,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 175.42,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.83
  }
 ],
 "id": "overlay_873CDDC9_90AE_43F1_41DD_F5FC05968F7D",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.09,
   "image": "this.AnimatedImageResource_D83966F8_907D_C190_41B3_5AC1015801D6",
   "pitch": -24.09,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.09,
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.09
  }
 ],
 "id": "overlay_8683A418_909E_4090_41B3_7545FD684ECD",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8, this.camera_82699E54_95F0_F251_41DD_C0C7D1D2EC56); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_0_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 82.2,
   "hfov": 54.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.52
  }
 ],
 "id": "overlay_AAF2B3EF_91B2_47B0_41D9_7CD6B16BAE57",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8284D938_909E_4090_41E0_17F4352B271A, this.camera_827A5E5C_95F0_F251_41BB_81111BA4ED79); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_1_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_1_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_1_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A9934052_91B3_C090_41E2_5F632E20C488",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -94.92,
   "image": "this.AnimatedImageResource_D803E742_907D_C0F0_41C6_D667B09B0C12",
   "pitch": -2.37,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -94.92,
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.37
  }
 ],
 "id": "overlay_A5335F88_91BD_C07F_41DB_7155BA1024AD",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.77,
   "image": "this.AnimatedImageResource_D8039742_907D_C0F0_41E1_2655F0F0168D",
   "pitch": -4.68,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.77,
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.68
  }
 ],
 "id": "overlay_A77C3C8C_91BE_4077_41DF_AD86237C2519",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FAE554_909F_C097_41D7_093333DFA0A8, this.camera_82983E4D_95F0_F5B3_41D3_3BE7354A2DF7); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ]
   },
   "yaw": 5.74,
   "hfov": 72.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.73
  }
 ],
 "id": "overlay_B66CE661_93F5_C0B1_41E0_2BD0D4680B28",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F08002_909E_4073_41A6_BFDAF0599E41, this.camera_82AEDE38_95F0_F5D1_41D0_D836558BCC38); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_1_1_0_map.gif",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -117.88,
   "hfov": 69.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.41
  }
 ],
 "id": "overlay_8CBF4C99_93F2_4190_41C0_CA31E3D0F4AF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F62878_909E_C090_41D9_D17E7CD5CD83, this.camera_82DC1E30_95F0_F5D1_41D4_789BE2B4FED4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_2_1_0_map.gif",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 89.57,
   "hfov": 56.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.58
  }
 ],
 "id": "overlay_8DD7D005_93F3_C070_41C3_9F47439AA494",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6, this.camera_82BE2E3F_95F0_F5CF_41DC_A9CA0BA355F2); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_3_1_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -163.7,
   "hfov": 34.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.32
  }
 ],
 "id": "overlay_B3292615_93EE_4091_4182_40B6B81CB3A8",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_4_1_0_map.gif",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 141.05,
   "hfov": 47.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.61
  }
 ],
 "id": "overlay_B32CED6E_93ED_C0B0_41D4_EBC40CBA7077",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6, this.camera_8288FE46_95F0_F5B1_41B2_9E80598BB480); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_5_1_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 172.62,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.63
  }
 ],
 "id": "overlay_B243783D_9396_4091_41E0_2E9F8FB9811D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 136.1,
   "image": "this.AnimatedImageResource_D806B742_907D_C0F0_41AF_FB768C5E63F0",
   "pitch": 12.06,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 136.1,
   "hfov": 5.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.06
  }
 ],
 "id": "overlay_B3D5D650_939D_C090_41CF_6DDC50B00CBF",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.78,
   "image": "this.AnimatedImageResource_D8065742_907D_C0F0_41C7_5D71D37E51C7",
   "pitch": 10.14,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.78,
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.14
  }
 ],
 "id": "overlay_B33A0F08_939E_4070_41DC_B52D7D679E09",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.92,
   "image": "this.AnimatedImageResource_D805C742_907D_C0F0_419E_17A6FC66ECAB",
   "pitch": -1.66,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 7.92,
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.66
  }
 ],
 "id": "overlay_B0EA63CF_9397_C7F1_41DB_2B24DE5F1998",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -116.79,
   "image": "this.AnimatedImageResource_D8058742_907D_C0F0_41CD_2CBE7035D06F",
   "pitch": -2.16,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -116.79,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.16
  }
 ],
 "id": "overlay_B3F7183A_9395_C093_41B0_C158339B4C00",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -159.69,
   "image": "this.AnimatedImageResource_D8054742_907D_C0F0_41DD_6C94C08FE8A2",
   "pitch": 0.88,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.69,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.88
  }
 ],
 "id": "overlay_B0C496CD_9392_41F0_41D4_7BAD9C0D4FC9",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820D700B_90F2_4071_41D8_54F5F8A2E133, this.camera_8326FDD6_95F0_F651_41A1_17003C8BA286); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_0_1_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 33.12,
   "hfov": 67.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.57
  }
 ],
 "id": "overlay_D0350E99_90AE_C190_41B3_8AFA377E0E3F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811, this.camera_8356BDC9_95F0_F6B3_41B5_F3049304D3C0); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D188A73F_90AE_4090_41A6_3D6BDA5C4298",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5, this.camera_8336CDE5_95F0_F673_41D5_273EF0FA2994); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_2_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D13F20B9_90B2_4191_41D4_910F3B30A3FD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5, this.camera_83008DF2_95F0_F651_4194_E2060ED84991); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_3_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_3_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_3_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_D23F5376_90B2_C090_41D7_43ADBB232B40",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.89,
   "image": "this.AnimatedImageResource_D8F37754_907D_C090_41D1_7DB48FD39991",
   "pitch": -7.49,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 26.89,
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.49
  }
 ],
 "id": "overlay_D376B4B5_90BE_4190_41CC_4E27CAFD1A4E",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -76,
   "image": "this.AnimatedImageResource_D8F2C754_907D_C090_41D3_773EB64F3FA3",
   "pitch": -17.09,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -76,
   "hfov": 6.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.09
  }
 ],
 "id": "overlay_DEF617E3_90BE_CFB0_41C4_A099C0491617",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.12,
   "image": "this.AnimatedImageResource_D8F2F754_907D_C090_41C2_B577623421B3",
   "pitch": -16.06,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -173.12,
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.06
  }
 ],
 "id": "overlay_DDB595DC_90B2_4390_41DE_94F22C24FEE9",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0, this.camera_81926F22_95F0_F3F1_41B3_7E305F3D60ED); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_0_1_0_map.gif",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 12.18,
   "hfov": 105.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.28
  }
 ],
 "id": "overlay_BCFA92E7_9097_C1B0_41C8_4DDDEC25DE26",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D, this.camera_8189EF1B_95F0_F3D7_41DB_2BB64A96C078); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "yaw": -67.26,
   "hfov": 57.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.17
  }
 ],
 "id": "overlay_BF3A6979_90F2_C090_41DB_FC8644D858FC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6B794_909E_4F97_41CE_89246379FDF6, this.camera_81875F14_95F0_F3D1_41DD_5BC9672BD3BB); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ]
   },
   "yaw": -129.72,
   "hfov": 72.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.06
  }
 ],
 "id": "overlay_BCEF42BE_90F3_C190_41E1_7F87BE82A63B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.62,
   "image": "this.AnimatedImageResource_D81BE73B_907D_C090_41DA_8F0A1929B974",
   "pitch": 0.08,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -150.62,
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.08
  }
 ],
 "id": "overlay_BF96FC81_90F2_C071_41CF_BB152892DFD7",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.18,
   "image": "this.AnimatedImageResource_D81BB73B_907D_C090_41C4_27D090359B27",
   "pitch": -15.49,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -63.18,
   "hfov": 5.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.49
  }
 ],
 "id": "overlay_BC1447BD_90EF_CF89_41E2_35480D936662",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 20.87,
   "image": "this.AnimatedImageResource_D81B773B_907D_C090_41E1_576CF61AA84A",
   "pitch": -16.94,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 20.87,
   "hfov": 5.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.94
  }
 ],
 "id": "overlay_BF7E3103_9092_4070_41E2_42CD313965F8",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0, this.camera_81D56B92_95F0_F2D1_41E0_FA5AEB8DF73A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_1_HS_0_1_0_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -54.05,
   "hfov": 67.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.84
  }
 ],
 "id": "overlay_A7D7BEEB_90F3_C1B0_41CF_4039CA9B0EE4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FE3648_909E_40FF_41B9_8538CC50784D, this.camera_81D23B89_95F0_F2B3_41DF_858467AC78C2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_1_HS_1_1_0_map.gif",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 25.74,
   "hfov": 30.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.07
  }
 ],
 "id": "overlay_BE1AC527_90F2_40B0_41CE_DCF362A37748",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.51,
   "image": "this.AnimatedImageResource_D8189742_907D_C0F0_41D6_DEEFE2B4A58B",
   "pitch": 1.46,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -51.51,
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.46
  }
 ],
 "id": "overlay_BE3A884D_90F2_40F0_41A8_2CF1C7B8D201",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.26,
   "image": "this.AnimatedImageResource_D8185742_907D_C0F0_41E0_931E827A986B",
   "pitch": -0.51,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 28.26,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.51
  }
 ],
 "id": "overlay_BF298913_90F2_C090_41C4_89648E56AA5F",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82700584_90F2_4070_41B8_7E70E55B5938, this.camera_817C6C00_95F0_F5B1_41DA_38D772AD6EFE); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A8395CC6_9095_C1F0_41A6_7A90495A0C10",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B, this.camera_814B8C09_95F0_F5B3_41E0_FE26D1796CC5); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_1_1_6_map.gif",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -16.3,
   "hfov": 64.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.15
  }
 ],
 "id": "overlay_AFF46AE4_9092_41B0_41E1_573EDABE40D2",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491, this.camera_81708BF8_95F0_F251_41A5_D38D65581B88); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_2_1_6_map.gif",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -77.56,
   "hfov": 60.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.43
  }
 ],
 "id": "overlay_AF78BA50_9092_4090_41D6_69D87E05296D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.43,
   "image": "this.AnimatedImageResource_D808774C_907D_C0F7_41D6_ED3B047D1714",
   "pitch": -28.89,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_3_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.43,
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.89
  }
 ],
 "id": "overlay_AE00C618_90AE_C09F_41DD_38F90DC87266",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.54,
   "image": "this.AnimatedImageResource_D808174C_907D_C0F7_41E1_0720F49C5D43",
   "pitch": -9.83,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -14.54,
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.83
  }
 ],
 "id": "overlay_D3B67D7B_90B2_4090_41D2_DBC763133816",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.99,
   "image": "this.AnimatedImageResource_D8F7E74C_907D_C0F7_4191_C242EC92DA77",
   "pitch": -9.87,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -66.99,
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.87
  }
 ],
 "id": "overlay_AE166394_90B2_4790_41D7_0683F4B98780",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D, this.camera_808DACBE_95F0_F6D0_41CF_157209186A1B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A2D2ACF3_9192_4190_41D6_867B00A3C625",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8373587C_909E_4090_41E0_5FDFEAD79E18, this.camera_80813CB4_95F0_F6D1_41DB_7BEF619DE91E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A1847834_9193_C090_41DF_F6BE5684EA41",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32, this.camera_80A5FCA0_95F0_F6F1_41DB_11B6E2237544); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A7476D92_9192_C393_41B5_657D15456BAC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32, this.camera_80B71CAA_95F0_F6F1_41D2_E3B83085724A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_3_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_3_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_3_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_3_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A67B9E4A_9192_40F0_41C4_FB5694479DC7",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -168.55,
   "image": "this.AnimatedImageResource_D8022742_907D_C0F0_41E2_3D71A076CFD8",
   "pitch": 15.29,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -168.55,
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.29
  }
 ],
 "id": "overlay_A1B41C46_9192_C0F3_41CB_CE5AD510125D",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.44,
   "image": "this.AnimatedImageResource_D801F742_907D_C0F0_41D2_CA3ADC53794B",
   "pitch": -6.97,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 56.44,
   "hfov": 6.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97
  }
 ],
 "id": "overlay_A6AD6467_91AE_40B0_41C7_B5C602EF1314",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.5,
   "image": "this.AnimatedImageResource_D8014742_907D_C0F0_41E0_35F017849438",
   "pitch": -2.17,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -84.5,
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.17
  }
 ],
 "id": "overlay_A796FA99_91B6_4191_4189_79FAB2813C11",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6, this.camera_81299C29_95F0_F5F3_41D1_26DEF578BE13); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_A61A5DCF_9196_43F1_41E2_1C72924B2804",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158.37,
   "image": "this.AnimatedImageResource_D80E874B_907D_C0F0_41B9_50BA8B55D00B",
   "pitch": 9.39,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -158.37,
   "hfov": 6.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.39
  }
 ],
 "id": "overlay_A68FAC50_9192_40EF_41CA_DB3321D9BBDD",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_DFC8FECE_91F2_41F0_41DC_D626FC0DAC24",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90, this.camera_80461CE0_95F0_F671_41D5_0B7F2CEE7AC9); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ]
   },
   "yaw": -31.53,
   "hfov": 67.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.06
  }
 ],
 "id": "overlay_ADB773EF_90B6_47B0_41A5_218F8878E775",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_1_HS_1_1_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 19.69,
   "hfov": 37.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.52
  }
 ],
 "id": "overlay_ADF79E42_90B6_40F0_41BD_87B18CD99D10",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.25,
   "image": "this.AnimatedImageResource_D80A374C_907D_C0F7_41E0_467016378B10",
   "pitch": -5.89,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -17.25,
   "hfov": 4.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.89
  }
 ],
 "id": "overlay_D5EF3405_90B2_4071_41C6_9995B331176D",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 20.38,
   "image": "this.AnimatedImageResource_D809E74C_907D_C0F7_41DA_3566F3D73D31",
   "pitch": -28.75,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 20.38,
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.75
  }
 ],
 "id": "overlay_AA15A93E_90B5_C090_41C6_6C888040649B",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "backgroundOpacity": 0,
 "id": "htmlText_A3C258FF_9072_C190_4181_D9303AF1DF6D",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Montserrat';\">Women's bathroom </SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "data": {
  "name": "HTMLText106959"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471, this.camera_81837BCE_95F0_F2B1_41B0_291946E6727B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_0_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_0_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_8B7319AA_9395_C3B0_41C6_DA4ECFFF4926",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471, this.camera_8189BBD6_95F0_F251_41E2_A18579703923); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_1_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -160.61,
   "hfov": 40.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.66
  }
 ],
 "id": "overlay_8A366843_9396_C0F0_41AF_AE7B2FAB5976",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F6AB82_909E_C070_41DD_6E00941F9D59, this.camera_819C2BE7_95F0_F27F_41D0_2EC1B3D7E3C6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_8A7E043B_9396_4090_41D5_630462FBA79E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82F51E44_909E_40F7_41C3_AA968A97F471, this.camera_8196BBDF_95F0_F24F_41DE_3631BCDB0C6B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.73,
   "image": "this.AnimatedImageResource_D8249700_907D_C070_41DF_C26990E00E43",
   "pitch": -22.17,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_3_0_6_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -172.73,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.17
  }
 ],
 "id": "overlay_8809D2FE_9392_4190_41CA_683948435D9E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.22,
   "image": "this.AnimatedImageResource_C8E6095B_9096_C091_41C8_38F701688EE1",
   "pitch": -7.51,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.22,
   "hfov": 5.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.51
  }
 ],
 "id": "overlay_8976CA60_9396_40B0_41C8_602722D558D5",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "toolTipPaddingBottom": 4,
 "toolTipDisplayTime": 600,
 "id": "MapViewer",
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "borderSize": 0,
 "playbackBarLeft": 0,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "toolTipPaddingLeft": 6,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "propagateClick": false,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "paddingTop": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipBorderSize": 1,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderRadius": 3,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_827119B8_90F2_C390_41D3_9AF4351227AB, this.camera_82CC0E29_95F0_F5F3_41DE_934FE133385A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_1_HS_0_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -159.24,
   "hfov": 40.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.09
  }
 ],
 "id": "overlay_AB41A68E_91AD_C070_41CA_1E0D356D396E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126, this.camera_82C21E21_95F0_F5F3_41D3_748E2E9D9EE4); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_1_HS_1_1_0_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 13.04,
   "hfov": 37.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.39
  }
 ],
 "id": "overlay_A543A607_91B2_C071_41DF_528A0566B6AA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.77,
   "image": "this.AnimatedImageResource_D80D974C_907D_C0F7_41E1_43A88A3EA95F",
   "pitch": -21.26,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 12.77,
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.26
  }
 ],
 "id": "overlay_ABEC861B_9196_4090_41DF_509BD895B95B",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.81,
   "image": "this.AnimatedImageResource_D80D574C_907D_C0F7_41C1_676F785035C3",
   "pitch": -20.18,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -164.81,
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.18
  }
 ],
 "id": "overlay_A4FA0A25_9192_40B1_41E1_F98B0B5322C2",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8274313B_90F2_4091_41AD_09E1B8343A90, this.camera_8DF0FE94_95F0_F2D1_41DB_A8F57E3B43DA); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_0_1_0_map.gif",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -0.86,
   "hfov": 47.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.12
  }
 ],
 "id": "overlay_A88A285F_909E_C091_41D4_7B8D73E57E9C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126, this.camera_8DC17E9B_95F0_F2D7_41D3_E1CA28AACD12); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_AFBBD5B7_909F_C390_41AD_E137D3B85B52",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_820FACE2_90F2_C1B3_41CD_C57546703126, this.camera_8DD10EA2_95F0_F2F1_41D0_198F2FC6E583); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_2_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_AEC7D40C_909E_4070_41E2_6A461CE89811",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 149.26,
   "image": "this.AnimatedImageResource_D80B674C_907D_C0F7_41D4_4D9F95B7529D",
   "pitch": -2.93,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 149.26,
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.93
  }
 ],
 "id": "overlay_ADD8F93A_90BE_C090_41E1_8B8A7FED16C6",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.35,
   "image": "this.AnimatedImageResource_D80B074C_907D_C0F7_41CA_7E54776F1614",
   "pitch": -6.18,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.35,
   "hfov": 5.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.18
  }
 ],
 "id": "overlay_AD617831_90BD_C091_41DD_95D5CF488865",
 "data": {
  "label": "Arrow 06c Right"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "backgroundOpacity": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "right": "0%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "91.304%",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "bottom": "0%",
 "class": "Container",
 "height": "85.959%",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "gap": 3,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "paddingLeft": 30,
 "width": 1199,
 "children": [
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0"
 ],
 "gap": 3,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "height": 51,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "scrollBarMargin": 2,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundOpacity": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundOpacity": 0,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundOpacity": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "15%",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowColor": "#000000",
 "borderSize": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0
},
{
 "backgroundOpacity": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "paddingLeft": 0,
 "right": "10%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "contentOpaque": false
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E37959_9096_C091_41CB_7C0A49B665F2",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E3195A_9096_C093_41C2_AD80E9A28354",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8272CAFB_90F2_C191_41C7_DB068A643F80_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F1D754_907D_C090_41DD_24CF736C7AD5",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8271C455_90F2_4091_41C3_9F219F955BE1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81F173A_907D_C091_41C8_C47FAE0F5DDC",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81EC73B_907D_C090_41C5_71495165448C",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8F1E975_9096_C090_41BD_40CD8BE30AB2",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FAE554_909F_C097_41D7_093333DFA0A8_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F0B754_907D_C090_41E0_B4523DDD4311",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F01754_907D_C090_41BC_BACB6C585B69",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82715345_90F3_C0F1_41CE_8AB086BC7AB0_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E5F961_9096_C0B0_41D6_15EE671FBA23",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8208700_907D_C070_41DF_9C1BD7FEAAE4",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E59961_9096_C0B0_41AE_7B114162A9BA",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F64A0F_909E_C070_41D4_73599B951CC4_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E0795A_9096_C093_41C1_7C5E904F7920",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820EC06B_90F3_C0B7_41E1_7677BF25FAB9_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80B874C_907D_C0F7_41B3_F28A5FA2A01A",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80B574C_907D_C0F7_41E2_A6C33D9A67D2",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80CE74C_907D_C0F7_41C8_73A07F1DF941",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_820FACE2_90F2_C1B3_41CD_C57546703126_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D811E732_907D_C093_41E0_A14540D5FC8E",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8118732_907D_C093_4162_FD98FF6C6500",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8115732_907D_C093_41E1_15A093A34E1F",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8113732_907D_C093_41D4_94BDB7B1FCD3",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D810F732_907D_C093_41CD_BE47B9970A0E",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_11_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8104732_907D_C093_41CE_9806AB83A65F",
 "rowCount": 5,
 "colCount": 4,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_82F350D0_909D_C1EF_41D2_F1B86F9767C6_1_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F73754_907D_C090_41C3_5BC9C943FD9E",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_820CA6BF_90F2_4190_41CF_2BD8400D7491_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F56754_907D_C090_41CA_F33AF7FF2DD6",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820D700B_90F2_4071_41D8_54F5F8A2E133_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D838F6F8_907D_C190_41BD_5F6D8BF959AD",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E2F959_9096_C091_41DA_A0A2F1DCAB92",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_827119B8_90F2_C390_41D3_9AF4351227AB_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D819973B_907D_C090_41C3_62CA98C47ED7",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81AD73B_907D_C090_41D6_D37E291ACAF5",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81AA73B_907D_C090_41E0_BAC4B2F1257C",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FE3648_909E_40FF_41B9_8538CC50784D_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8F89967_9096_C0B0_41CD_C422F349FD17",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D828672A_907D_C0B3_41E1_21663F3DB1DF",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F0310F_909E_4071_41D8_5AD6AF38AD32_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F5C754_907D_C090_41CF_4AE8E74B0AC2",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820E0DE1_90F2_43B1_41C8_5A8A0ABEA811_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D800B742_907D_C0F0_41D4_C4F0DCD6D8CB",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8007742_907D_C0F0_41BE_3C1FE9705DCA",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82FD3745_909F_C0F1_41E0_E1AEA5C88E4D_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D82FB708_907D_C070_41DD_DEA284D7F4CA",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D82F5708_907D_C070_41D8_5C117A0F2BBB",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F62878_909E_C090_41D9_D17E7CD5CD83_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E7B961_9096_C0B1_41B5_3FDB2B09B6E6",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E47961_9096_C0B1_41AE_ED32E6A7E40E",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E43961_9096_C0B1_41C3_EC263DFF3CC5",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8222700_907D_C070_41DA_A9B98ECAE3EE",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6AB82_909E_C070_41DD_6E00941F9D59_1_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D814D732_907D_C093_41D5_5E59ECFC53FB",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8149732_907D_C093_41D5_A53B8A96C44D",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8144732_907D_C093_41D1_A7F968ACCD03",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8142732_907D_C093_41AE_7DC0522E80FF",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F08002_909E_4073_41A6_BFDAF0599E41_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81D073B_907D_C090_41D2_1D0F33FF43B6",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81CD73B_907D_C090_4187_7FBACB8E09FD",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6B794_909E_4F97_41CE_89246379FDF6_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8FE875C_907D_C097_41BE_F487284618BB",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8FE575C_907D_C097_41D3_9B84018E1650",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8FE075C_907D_C097_4195_63C1119C2D2C",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_820D31BC_90F3_C397_41D3_678BB2AA08F5_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8FE0969_9096_C0B1_41DE_0D5A53501684",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D816F732_907D_C093_41D3_7500CBB5D4CA",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D816A732_907D_C093_41D7_BC79E68207CD",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8166732_907D_C093_41B6_1060A1053AE2",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82F6DEF7_909D_C191_41C9_27540513D101_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D804E742_907D_C0F0_41E1_E93C1D2E657D",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8284D938_909E_4090_41E0_17F4352B271A_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80F674A_907D_C0F0_41B6_CDD16A65B8B7",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FA7647_909F_C0F1_41C0_365AB1B1FE08_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8EF0957_9096_C091_41C3_193FFC7D11FA",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D83AC6F8_907D_C190_41DF_F32259E80B66",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F51E44_909E_40F7_41C3_AA968A97F471_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D825D700_907D_C070_41CF_04B55E33E67B",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E1595A_9096_C093_41CF_DD4787FB1857",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8272FBB9_90F2_C790_41C3_11D111E9DE6B_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D819F742_907D_C0F0_41D3_04D3C361BE39",
 "rowCount": 5,
 "colCount": 4,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8194742_907D_C0F0_41D8_7EE6700243DE",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FAF566_909E_40B0_41D3_E98A4C712BF0_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8EC8957_9096_C090_41C1_0380802228AE",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8ED5957_9096_C090_41BF_D4EDF83C98F7",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D83966F8_907D_C190_41B3_5AC1015801D6",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8273A891_90F2_4190_41C5_69387F913932_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D803E742_907D_C0F0_41C6_D667B09B0C12",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8039742_907D_C0F0_41E1_2655F0F0168D",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8373587C_909E_4090_41E0_5FDFEAD79E18_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D806B742_907D_C0F0_41AF_FB768C5E63F0",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8065742_907D_C0F0_41C7_5D71D37E51C7",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D805C742_907D_C0F0_419E_17A6FC66ECAB",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8058742_907D_C0F0_41CD_2CBE7035D06F",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8054742_907D_C0F0_41DD_6C94C08FE8A2",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F443FF_909E_4790_41D6_7705F9CAEB30_1_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F37754_907D_C090_41D1_7DB48FD39991",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F2C754_907D_C090_41D3_773EB64F3FA3",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F2F754_907D_C090_41C2_B577623421B3",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82747EDD_90F2_4190_41DB_D441FA66DD6A_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81BE73B_907D_C090_41DA_8F0A1929B974",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81BB73B_907D_C090_41C4_27D090359B27",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D81B773B_907D_C090_41E1_576CF61AA84A",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82FBC736_909E_4093_41D3_ABF7AE83D568_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8189742_907D_C0F0_41D6_DEEFE2B4A58B",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8185742_907D_C0F0_41E0_931E827A986B",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F233A9_909D_C7B0_41DA_569903A4AE15_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D808774C_907D_C0F7_41D6_ED3B047D1714",
 "rowCount": 5,
 "colCount": 4,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D808174C_907D_C0F7_41E1_0720F49C5D43",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8F7E74C_907D_C0F7_4191_C242EC92DA77",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8274313B_90F2_4091_41AD_09E1B8343A90_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8022742_907D_C0F0_41E2_3D71A076CFD8",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D801F742_907D_C0F0_41D2_CA3ADC53794B",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8014742_907D_C0F0_41E0_35F017849438",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FD084F_909F_C0F0_41DE_6ABA4A7425F8_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80E874B_907D_C0F0_41B9_50BA8B55D00B",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82FFE269_909D_C0B1_41B3_9F6069D30D02_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80A374C_907D_C0F7_41E0_467016378B10",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D809E74C_907D_C0F7_41DA_3566F3D73D31",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_85CB4A4F_90ED_C0F0_41D7_53FDF9247B6B_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D8249700_907D_C070_41DF_C26990E00E43",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_C8E6095B_9096_C091_41C8_38F701688EE1",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82F60C87_909E_C070_419F_4E723DF67A5F_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80D974C_907D_C0F7_41E1_43A88A3EA95F",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80D574C_907D_C0F7_41C1_676F785035C3",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_82F7C238_909E_4090_41CE_2C384381DB1A_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80B674C_907D_C0F7_41D4_4D9F95B7529D",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D80B074C_907D_C0F7_41CA_7E54776F1614",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82700584_90F2_4070_41B8_7E70E55B5938_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "width": 60,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 },
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "height": 58,
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/?hl=en', '_blank')",
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 },
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
},
{
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "backgroundOpacity": 0,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "gap": 5,
 "paddingLeft": 0,
 "iconWidth": 32,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 103,
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "propagateClick": true,
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "shadowSpread": 1,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15,
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "85%",
 "minHeight": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderSize": 0,
 "width": "50%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51,
 "gap": 0,
 "contentOpaque": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "cursor": "hand"
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "85%",
 "minHeight": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingLeft": 50,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderSize": 0,
 "width": "50%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51,
 "gap": 0,
 "contentOpaque": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "cursor": "hand"
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "height": 140,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "width": "100%",
 "itemBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 5,
 "itemLabelFontStyle": "normal",
 "backgroundColor": [
  "#000000"
 ],
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "class": "ThumbnailGrid",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "shadow": false,
 "gap": 26,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Montserrat",
 "height": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingTop": 10,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "backgroundOpacity": 0.05,
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "paddingRight": 70,
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadow": true,
 "data": {
  "name": "ThumbnailList"
 },
 "itemVerticalAlign": "top",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemMinWidth": 50
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "85%",
 "minHeight": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderSize": 0,
 "width": "15%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 400,
 "scrollBarColor": "#0069A3",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51,
 "gap": 0,
 "contentOpaque": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand"
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "height": 140,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "height": 140,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "55%",
 "minHeight": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "paddingRight": 60,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderSize": 0,
 "width": "45%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51,
 "gap": 0,
 "contentOpaque": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "top": "0%",
 "borderRadius": 0,
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "minWidth": 1,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 520,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "width": 370,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "toolTipPaddingBottom": 4,
 "toolTipDisplayTime": 600,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "propagateClick": false,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipPaddingLeft": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "paddingTop": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "toolTipFontSize": 12,
 "toolTipBorderSize": 1,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderRadius": 3,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Viewer info 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0
},
{
 "backgroundOpacity": 0,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 },
 "height": "100%",
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "minWidth": 1,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 520,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingLeft": 0,
 "width": 370,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "77.115%",
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "right": 20,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "verticalAlign": "top",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "right",
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "cursor": "hand"
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "right": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "bottom": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "scrollEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "insetBorder": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "minWidth": 1,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 520,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingLeft": 0,
 "width": 370,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "77.115%",
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "right": 20,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "verticalAlign": "top",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "right",
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "77.115%",
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "right": 20,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "verticalAlign": "top",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "right",
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "cursor": "hand"
},
{
 "toolTipPaddingBottom": 4,
 "toolTipDisplayTime": 600,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "minHeight": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "propagateClick": false,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipPaddingLeft": 6,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "paddingTop": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipBorderSize": 1,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderRadius": 3,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "paddingLeft": 0,
 "right": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "cursor": "hand"
},
{
 "toolTipPaddingBottom": 4,
 "toolTipDisplayTime": 600,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "minHeight": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "propagateClick": false,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipPaddingLeft": 6,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "paddingTop": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipBorderSize": 1,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderRadius": 3,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "right": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "right": 20,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "10%",
 "verticalAlign": "top",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "horizontalAlign": "right",
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "10%",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "top": "0%",
 "borderRadius": 0,
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "minWidth": 1,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 520,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "width": 370,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "paddingRight": 10,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.62vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "backgroundOpacity": 0.7,
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "paddingLeft": 0,
 "iconWidth": 32,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "shadowSpread": 1,
 "class": "Button",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "width": "46%",
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "gap": 5,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "backgroundOpacity": 0,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "12%",
 "verticalAlign": "middle",
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 70,
 "borderRadius": 0,
 "mode": "push",
 "height": "8%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "80%",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "class": "Container",
 "height": "30%",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 },
 "gap": 10,
 "contentOpaque": false
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "backgroundOpacity": 0,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "12%",
 "verticalAlign": "middle",
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 70,
 "borderRadius": 0,
 "mode": "push",
 "height": "8%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "paddingRight": 10,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "backgroundOpacity": 0.7,
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "paddingLeft": 0,
 "iconWidth": 32,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "shadowSpread": 1,
 "class": "Button",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "width": "46%",
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "gap": 5,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "paddingRight": 10,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "backgroundOpacity": 0.7,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "paddingLeft": 0,
 "iconWidth": 32,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 207,
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "mode": "push",
 "minWidth": 1,
 "fontSize": 34,
 "shadowSpread": 1,
 "class": "Button",
 "height": 59,
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "visible": false,
 "gap": 5,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "45%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorDirection": "vertical",
 "backgroundOpacity": 0.3,
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "backgroundOpacity": 0,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "width": "25%",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderRadius": 0,
 "height": "100%",
 "class": "Image",
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 }
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "width": "75%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "scrollBarMargin": 2,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } }
 },
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "data": {
  "name": "Player468"
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
