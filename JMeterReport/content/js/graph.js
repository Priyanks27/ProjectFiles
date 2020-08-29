/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 88.0, "minX": 0.0, "maxY": 15388.0, "series": [{"data": [[0.0, 88.0], [0.1, 94.0], [0.2, 124.0], [0.3, 124.0], [0.4, 127.0], [0.5, 128.0], [0.6, 132.0], [0.7, 132.0], [0.8, 132.0], [0.9, 138.0], [1.0, 139.0], [1.1, 146.0], [1.2, 148.0], [1.3, 161.0], [1.4, 161.0], [1.5, 170.0], [1.6, 174.0], [1.7, 175.0], [1.8, 176.0], [1.9, 176.0], [2.0, 178.0], [2.1, 178.0], [2.2, 179.0], [2.3, 180.0], [2.4, 182.0], [2.5, 182.0], [2.6, 184.0], [2.7, 184.0], [2.8, 184.0], [2.9, 185.0], [3.0, 185.0], [3.1, 186.0], [3.2, 186.0], [3.3, 186.0], [3.4, 186.0], [3.5, 187.0], [3.6, 187.0], [3.7, 187.0], [3.8, 188.0], [3.9, 188.0], [4.0, 188.0], [4.1, 189.0], [4.2, 189.0], [4.3, 189.0], [4.4, 189.0], [4.5, 189.0], [4.6, 190.0], [4.7, 190.0], [4.8, 190.0], [4.9, 191.0], [5.0, 191.0], [5.1, 192.0], [5.2, 192.0], [5.3, 192.0], [5.4, 192.0], [5.5, 192.0], [5.6, 192.0], [5.7, 192.0], [5.8, 193.0], [5.9, 193.0], [6.0, 193.0], [6.1, 193.0], [6.2, 193.0], [6.3, 193.0], [6.4, 193.0], [6.5, 193.0], [6.6, 193.0], [6.7, 194.0], [6.8, 194.0], [6.9, 194.0], [7.0, 194.0], [7.1, 194.0], [7.2, 194.0], [7.3, 194.0], [7.4, 195.0], [7.5, 195.0], [7.6, 195.0], [7.7, 195.0], [7.8, 195.0], [7.9, 195.0], [8.0, 195.0], [8.1, 195.0], [8.2, 195.0], [8.3, 195.0], [8.4, 195.0], [8.5, 195.0], [8.6, 195.0], [8.7, 196.0], [8.8, 196.0], [8.9, 196.0], [9.0, 196.0], [9.1, 196.0], [9.2, 196.0], [9.3, 196.0], [9.4, 196.0], [9.5, 196.0], [9.6, 196.0], [9.7, 196.0], [9.8, 196.0], [9.9, 196.0], [10.0, 196.0], [10.1, 196.0], [10.2, 196.0], [10.3, 197.0], [10.4, 197.0], [10.5, 197.0], [10.6, 197.0], [10.7, 197.0], [10.8, 197.0], [10.9, 197.0], [11.0, 197.0], [11.1, 197.0], [11.2, 197.0], [11.3, 197.0], [11.4, 197.0], [11.5, 197.0], [11.6, 197.0], [11.7, 197.0], [11.8, 197.0], [11.9, 197.0], [12.0, 197.0], [12.1, 197.0], [12.2, 197.0], [12.3, 197.0], [12.4, 197.0], [12.5, 197.0], [12.6, 197.0], [12.7, 197.0], [12.8, 198.0], [12.9, 198.0], [13.0, 198.0], [13.1, 198.0], [13.2, 198.0], [13.3, 198.0], [13.4, 198.0], [13.5, 198.0], [13.6, 198.0], [13.7, 198.0], [13.8, 198.0], [13.9, 198.0], [14.0, 198.0], [14.1, 198.0], [14.2, 198.0], [14.3, 198.0], [14.4, 198.0], [14.5, 198.0], [14.6, 198.0], [14.7, 198.0], [14.8, 198.0], [14.9, 199.0], [15.0, 199.0], [15.1, 199.0], [15.2, 199.0], [15.3, 199.0], [15.4, 199.0], [15.5, 199.0], [15.6, 199.0], [15.7, 199.0], [15.8, 199.0], [15.9, 199.0], [16.0, 199.0], [16.1, 199.0], [16.2, 199.0], [16.3, 199.0], [16.4, 199.0], [16.5, 199.0], [16.6, 199.0], [16.7, 199.0], [16.8, 199.0], [16.9, 199.0], [17.0, 200.0], [17.1, 200.0], [17.2, 200.0], [17.3, 200.0], [17.4, 200.0], [17.5, 200.0], [17.6, 200.0], [17.7, 200.0], [17.8, 200.0], [17.9, 200.0], [18.0, 200.0], [18.1, 200.0], [18.2, 200.0], [18.3, 200.0], [18.4, 200.0], [18.5, 200.0], [18.6, 200.0], [18.7, 201.0], [18.8, 201.0], [18.9, 201.0], [19.0, 201.0], [19.1, 201.0], [19.2, 201.0], [19.3, 201.0], [19.4, 201.0], [19.5, 201.0], [19.6, 201.0], [19.7, 201.0], [19.8, 201.0], [19.9, 201.0], [20.0, 201.0], [20.1, 201.0], [20.2, 201.0], [20.3, 201.0], [20.4, 201.0], [20.5, 201.0], [20.6, 202.0], [20.7, 202.0], [20.8, 202.0], [20.9, 202.0], [21.0, 202.0], [21.1, 202.0], [21.2, 202.0], [21.3, 202.0], [21.4, 202.0], [21.5, 202.0], [21.6, 202.0], [21.7, 202.0], [21.8, 202.0], [21.9, 203.0], [22.0, 203.0], [22.1, 203.0], [22.2, 203.0], [22.3, 203.0], [22.4, 203.0], [22.5, 203.0], [22.6, 203.0], [22.7, 203.0], [22.8, 203.0], [22.9, 203.0], [23.0, 203.0], [23.1, 203.0], [23.2, 203.0], [23.3, 204.0], [23.4, 204.0], [23.5, 204.0], [23.6, 204.0], [23.7, 204.0], [23.8, 204.0], [23.9, 204.0], [24.0, 204.0], [24.1, 204.0], [24.2, 204.0], [24.3, 204.0], [24.4, 204.0], [24.5, 204.0], [24.6, 204.0], [24.7, 204.0], [24.8, 204.0], [24.9, 204.0], [25.0, 204.0], [25.1, 204.0], [25.2, 204.0], [25.3, 204.0], [25.4, 204.0], [25.5, 204.0], [25.6, 204.0], [25.7, 204.0], [25.8, 204.0], [25.9, 205.0], [26.0, 205.0], [26.1, 205.0], [26.2, 205.0], [26.3, 205.0], [26.4, 205.0], [26.5, 205.0], [26.6, 205.0], [26.7, 205.0], [26.8, 205.0], [26.9, 205.0], [27.0, 205.0], [27.1, 205.0], [27.2, 205.0], [27.3, 205.0], [27.4, 205.0], [27.5, 205.0], [27.6, 205.0], [27.7, 205.0], [27.8, 205.0], [27.9, 205.0], [28.0, 205.0], [28.1, 205.0], [28.2, 205.0], [28.3, 205.0], [28.4, 205.0], [28.5, 206.0], [28.6, 206.0], [28.7, 206.0], [28.8, 206.0], [28.9, 206.0], [29.0, 206.0], [29.1, 206.0], [29.2, 206.0], [29.3, 206.0], [29.4, 206.0], [29.5, 206.0], [29.6, 206.0], [29.7, 206.0], [29.8, 206.0], [29.9, 206.0], [30.0, 206.0], [30.1, 206.0], [30.2, 206.0], [30.3, 206.0], [30.4, 206.0], [30.5, 207.0], [30.6, 207.0], [30.7, 207.0], [30.8, 207.0], [30.9, 207.0], [31.0, 207.0], [31.1, 207.0], [31.2, 207.0], [31.3, 207.0], [31.4, 207.0], [31.5, 207.0], [31.6, 207.0], [31.7, 207.0], [31.8, 207.0], [31.9, 207.0], [32.0, 207.0], [32.1, 207.0], [32.2, 207.0], [32.3, 207.0], [32.4, 207.0], [32.5, 207.0], [32.6, 207.0], [32.7, 207.0], [32.8, 207.0], [32.9, 207.0], [33.0, 207.0], [33.1, 207.0], [33.2, 207.0], [33.3, 207.0], [33.4, 207.0], [33.5, 207.0], [33.6, 207.0], [33.7, 208.0], [33.8, 208.0], [33.9, 208.0], [34.0, 208.0], [34.1, 208.0], [34.2, 208.0], [34.3, 208.0], [34.4, 208.0], [34.5, 208.0], [34.6, 208.0], [34.7, 208.0], [34.8, 208.0], [34.9, 208.0], [35.0, 208.0], [35.1, 208.0], [35.2, 208.0], [35.3, 208.0], [35.4, 208.0], [35.5, 208.0], [35.6, 208.0], [35.7, 208.0], [35.8, 208.0], [35.9, 208.0], [36.0, 208.0], [36.1, 209.0], [36.2, 209.0], [36.3, 209.0], [36.4, 209.0], [36.5, 209.0], [36.6, 209.0], [36.7, 209.0], [36.8, 209.0], [36.9, 209.0], [37.0, 209.0], [37.1, 209.0], [37.2, 209.0], [37.3, 209.0], [37.4, 209.0], [37.5, 209.0], [37.6, 209.0], [37.7, 209.0], [37.8, 209.0], [37.9, 209.0], [38.0, 209.0], [38.1, 209.0], [38.2, 209.0], [38.3, 209.0], [38.4, 209.0], [38.5, 210.0], [38.6, 210.0], [38.7, 210.0], [38.8, 210.0], [38.9, 210.0], [39.0, 210.0], [39.1, 210.0], [39.2, 210.0], [39.3, 210.0], [39.4, 210.0], [39.5, 210.0], [39.6, 210.0], [39.7, 210.0], [39.8, 210.0], [39.9, 210.0], [40.0, 210.0], [40.1, 210.0], [40.2, 210.0], [40.3, 210.0], [40.4, 210.0], [40.5, 210.0], [40.6, 210.0], [40.7, 210.0], [40.8, 210.0], [40.9, 211.0], [41.0, 211.0], [41.1, 211.0], [41.2, 211.0], [41.3, 211.0], [41.4, 211.0], [41.5, 211.0], [41.6, 211.0], [41.7, 211.0], [41.8, 211.0], [41.9, 211.0], [42.0, 211.0], [42.1, 211.0], [42.2, 211.0], [42.3, 211.0], [42.4, 211.0], [42.5, 211.0], [42.6, 212.0], [42.7, 212.0], [42.8, 212.0], [42.9, 212.0], [43.0, 212.0], [43.1, 212.0], [43.2, 212.0], [43.3, 212.0], [43.4, 212.0], [43.5, 212.0], [43.6, 212.0], [43.7, 213.0], [43.8, 213.0], [43.9, 213.0], [44.0, 213.0], [44.1, 213.0], [44.2, 213.0], [44.3, 213.0], [44.4, 213.0], [44.5, 213.0], [44.6, 213.0], [44.7, 213.0], [44.8, 213.0], [44.9, 213.0], [45.0, 214.0], [45.1, 214.0], [45.2, 214.0], [45.3, 214.0], [45.4, 214.0], [45.5, 214.0], [45.6, 214.0], [45.7, 214.0], [45.8, 214.0], [45.9, 214.0], [46.0, 215.0], [46.1, 215.0], [46.2, 215.0], [46.3, 215.0], [46.4, 215.0], [46.5, 215.0], [46.6, 215.0], [46.7, 216.0], [46.8, 216.0], [46.9, 216.0], [47.0, 216.0], [47.1, 216.0], [47.2, 216.0], [47.3, 216.0], [47.4, 216.0], [47.5, 217.0], [47.6, 217.0], [47.7, 217.0], [47.8, 217.0], [47.9, 217.0], [48.0, 217.0], [48.1, 217.0], [48.2, 217.0], [48.3, 217.0], [48.4, 217.0], [48.5, 217.0], [48.6, 217.0], [48.7, 217.0], [48.8, 218.0], [48.9, 218.0], [49.0, 218.0], [49.1, 218.0], [49.2, 218.0], [49.3, 218.0], [49.4, 218.0], [49.5, 218.0], [49.6, 218.0], [49.7, 219.0], [49.8, 219.0], [49.9, 219.0], [50.0, 219.0], [50.1, 219.0], [50.2, 219.0], [50.3, 219.0], [50.4, 219.0], [50.5, 219.0], [50.6, 220.0], [50.7, 220.0], [50.8, 220.0], [50.9, 220.0], [51.0, 220.0], [51.1, 220.0], [51.2, 220.0], [51.3, 220.0], [51.4, 220.0], [51.5, 221.0], [51.6, 221.0], [51.7, 221.0], [51.8, 221.0], [51.9, 221.0], [52.0, 221.0], [52.1, 221.0], [52.2, 221.0], [52.3, 221.0], [52.4, 222.0], [52.5, 222.0], [52.6, 222.0], [52.7, 222.0], [52.8, 222.0], [52.9, 222.0], [53.0, 222.0], [53.1, 222.0], [53.2, 222.0], [53.3, 223.0], [53.4, 223.0], [53.5, 224.0], [53.6, 224.0], [53.7, 225.0], [53.8, 225.0], [53.9, 226.0], [54.0, 226.0], [54.1, 226.0], [54.2, 227.0], [54.3, 227.0], [54.4, 228.0], [54.5, 230.0], [54.6, 231.0], [54.7, 232.0], [54.8, 232.0], [54.9, 232.0], [55.0, 233.0], [55.1, 234.0], [55.2, 235.0], [55.3, 235.0], [55.4, 239.0], [55.5, 241.0], [55.6, 244.0], [55.7, 245.0], [55.8, 257.0], [55.9, 260.0], [56.0, 260.0], [56.1, 262.0], [56.2, 264.0], [56.3, 265.0], [56.4, 265.0], [56.5, 265.0], [56.6, 267.0], [56.7, 267.0], [56.8, 268.0], [56.9, 269.0], [57.0, 270.0], [57.1, 271.0], [57.2, 271.0], [57.3, 271.0], [57.4, 271.0], [57.5, 271.0], [57.6, 271.0], [57.7, 271.0], [57.8, 272.0], [57.9, 272.0], [58.0, 272.0], [58.1, 272.0], [58.2, 273.0], [58.3, 273.0], [58.4, 273.0], [58.5, 273.0], [58.6, 273.0], [58.7, 273.0], [58.8, 273.0], [58.9, 273.0], [59.0, 274.0], [59.1, 274.0], [59.2, 274.0], [59.3, 274.0], [59.4, 275.0], [59.5, 275.0], [59.6, 275.0], [59.7, 275.0], [59.8, 275.0], [59.9, 275.0], [60.0, 275.0], [60.1, 275.0], [60.2, 276.0], [60.3, 276.0], [60.4, 276.0], [60.5, 276.0], [60.6, 276.0], [60.7, 276.0], [60.8, 277.0], [60.9, 277.0], [61.0, 277.0], [61.1, 277.0], [61.2, 277.0], [61.3, 277.0], [61.4, 277.0], [61.5, 278.0], [61.6, 278.0], [61.7, 278.0], [61.8, 278.0], [61.9, 278.0], [62.0, 278.0], [62.1, 278.0], [62.2, 278.0], [62.3, 278.0], [62.4, 278.0], [62.5, 278.0], [62.6, 279.0], [62.7, 279.0], [62.8, 279.0], [62.9, 279.0], [63.0, 279.0], [63.1, 279.0], [63.2, 279.0], [63.3, 279.0], [63.4, 280.0], [63.5, 280.0], [63.6, 280.0], [63.7, 280.0], [63.8, 280.0], [63.9, 280.0], [64.0, 280.0], [64.1, 281.0], [64.2, 281.0], [64.3, 281.0], [64.4, 281.0], [64.5, 281.0], [64.6, 281.0], [64.7, 281.0], [64.8, 281.0], [64.9, 282.0], [65.0, 282.0], [65.1, 282.0], [65.2, 282.0], [65.3, 282.0], [65.4, 283.0], [65.5, 283.0], [65.6, 283.0], [65.7, 283.0], [65.8, 283.0], [65.9, 283.0], [66.0, 283.0], [66.1, 284.0], [66.2, 284.0], [66.3, 284.0], [66.4, 284.0], [66.5, 284.0], [66.6, 284.0], [66.7, 284.0], [66.8, 285.0], [66.9, 285.0], [67.0, 285.0], [67.1, 285.0], [67.2, 285.0], [67.3, 285.0], [67.4, 286.0], [67.5, 286.0], [67.6, 286.0], [67.7, 286.0], [67.8, 286.0], [67.9, 286.0], [68.0, 286.0], [68.1, 286.0], [68.2, 286.0], [68.3, 286.0], [68.4, 286.0], [68.5, 287.0], [68.6, 287.0], [68.7, 287.0], [68.8, 287.0], [68.9, 287.0], [69.0, 287.0], [69.1, 287.0], [69.2, 288.0], [69.3, 288.0], [69.4, 288.0], [69.5, 288.0], [69.6, 288.0], [69.7, 288.0], [69.8, 288.0], [69.9, 289.0], [70.0, 289.0], [70.1, 289.0], [70.2, 289.0], [70.3, 289.0], [70.4, 289.0], [70.5, 289.0], [70.6, 290.0], [70.7, 290.0], [70.8, 290.0], [70.9, 290.0], [71.0, 290.0], [71.1, 291.0], [71.2, 291.0], [71.3, 291.0], [71.4, 291.0], [71.5, 291.0], [71.6, 291.0], [71.7, 291.0], [71.8, 291.0], [71.9, 291.0], [72.0, 291.0], [72.1, 291.0], [72.2, 292.0], [72.3, 292.0], [72.4, 292.0], [72.5, 292.0], [72.6, 292.0], [72.7, 292.0], [72.8, 292.0], [72.9, 293.0], [73.0, 293.0], [73.1, 293.0], [73.2, 293.0], [73.3, 293.0], [73.4, 294.0], [73.5, 294.0], [73.6, 294.0], [73.7, 294.0], [73.8, 294.0], [73.9, 294.0], [74.0, 295.0], [74.1, 295.0], [74.2, 295.0], [74.3, 295.0], [74.4, 295.0], [74.5, 295.0], [74.6, 295.0], [74.7, 295.0], [74.8, 295.0], [74.9, 296.0], [75.0, 296.0], [75.1, 296.0], [75.2, 296.0], [75.3, 296.0], [75.4, 296.0], [75.5, 296.0], [75.6, 296.0], [75.7, 297.0], [75.8, 297.0], [75.9, 297.0], [76.0, 297.0], [76.1, 297.0], [76.2, 297.0], [76.3, 297.0], [76.4, 298.0], [76.5, 298.0], [76.6, 298.0], [76.7, 298.0], [76.8, 298.0], [76.9, 298.0], [77.0, 298.0], [77.1, 298.0], [77.2, 298.0], [77.3, 298.0], [77.4, 299.0], [77.5, 299.0], [77.6, 299.0], [77.7, 299.0], [77.8, 299.0], [77.9, 299.0], [78.0, 299.0], [78.1, 299.0], [78.2, 299.0], [78.3, 299.0], [78.4, 300.0], [78.5, 300.0], [78.6, 300.0], [78.7, 300.0], [78.8, 300.0], [78.9, 300.0], [79.0, 300.0], [79.1, 301.0], [79.2, 301.0], [79.3, 301.0], [79.4, 301.0], [79.5, 301.0], [79.6, 301.0], [79.7, 301.0], [79.8, 301.0], [79.9, 301.0], [80.0, 301.0], [80.1, 302.0], [80.2, 302.0], [80.3, 302.0], [80.4, 302.0], [80.5, 302.0], [80.6, 303.0], [80.7, 303.0], [80.8, 303.0], [80.9, 303.0], [81.0, 303.0], [81.1, 304.0], [81.2, 304.0], [81.3, 304.0], [81.4, 304.0], [81.5, 304.0], [81.6, 304.0], [81.7, 304.0], [81.8, 304.0], [81.9, 305.0], [82.0, 305.0], [82.1, 305.0], [82.2, 305.0], [82.3, 306.0], [82.4, 307.0], [82.5, 307.0], [82.6, 307.0], [82.7, 307.0], [82.8, 308.0], [82.9, 308.0], [83.0, 308.0], [83.1, 308.0], [83.2, 308.0], [83.3, 309.0], [83.4, 309.0], [83.5, 310.0], [83.6, 310.0], [83.7, 311.0], [83.8, 312.0], [83.9, 312.0], [84.0, 312.0], [84.1, 312.0], [84.2, 312.0], [84.3, 312.0], [84.4, 313.0], [84.5, 313.0], [84.6, 313.0], [84.7, 313.0], [84.8, 314.0], [84.9, 315.0], [85.0, 315.0], [85.1, 317.0], [85.2, 318.0], [85.3, 318.0], [85.4, 319.0], [85.5, 319.0], [85.6, 320.0], [85.7, 320.0], [85.8, 321.0], [85.9, 323.0], [86.0, 329.0], [86.1, 332.0], [86.2, 369.0], [86.3, 369.0], [86.4, 370.0], [86.5, 371.0], [86.6, 373.0], [86.7, 375.0], [86.8, 375.0], [86.9, 376.0], [87.0, 377.0], [87.1, 379.0], [87.2, 379.0], [87.3, 379.0], [87.4, 381.0], [87.5, 381.0], [87.6, 381.0], [87.7, 382.0], [87.8, 382.0], [87.9, 382.0], [88.0, 383.0], [88.1, 383.0], [88.2, 384.0], [88.3, 386.0], [88.4, 389.0], [88.5, 390.0], [88.6, 391.0], [88.7, 392.0], [88.8, 392.0], [88.9, 392.0], [89.0, 392.0], [89.1, 393.0], [89.2, 394.0], [89.3, 394.0], [89.4, 394.0], [89.5, 395.0], [89.6, 396.0], [89.7, 396.0], [89.8, 396.0], [89.9, 396.0], [90.0, 397.0], [90.1, 397.0], [90.2, 398.0], [90.3, 398.0], [90.4, 399.0], [90.5, 399.0], [90.6, 399.0], [90.7, 400.0], [90.8, 400.0], [90.9, 401.0], [91.0, 401.0], [91.1, 401.0], [91.2, 404.0], [91.3, 404.0], [91.4, 404.0], [91.5, 404.0], [91.6, 405.0], [91.7, 406.0], [91.8, 406.0], [91.9, 406.0], [92.0, 407.0], [92.1, 408.0], [92.2, 408.0], [92.3, 411.0], [92.4, 412.0], [92.5, 414.0], [92.6, 419.0], [92.7, 420.0], [92.8, 422.0], [92.9, 425.0], [93.0, 462.0], [93.1, 473.0], [93.2, 473.0], [93.3, 480.0], [93.4, 480.0], [93.5, 481.0], [93.6, 483.0], [93.7, 486.0], [93.8, 486.0], [93.9, 488.0], [94.0, 489.0], [94.1, 489.0], [94.2, 490.0], [94.3, 492.0], [94.4, 493.0], [94.5, 494.0], [94.6, 496.0], [94.7, 496.0], [94.8, 496.0], [94.9, 497.0], [95.0, 497.0], [95.1, 497.0], [95.2, 497.0], [95.3, 497.0], [95.4, 498.0], [95.5, 498.0], [95.6, 498.0], [95.7, 499.0], [95.8, 500.0], [95.9, 501.0], [96.0, 501.0], [96.1, 501.0], [96.2, 503.0], [96.3, 503.0], [96.4, 504.0], [96.5, 505.0], [96.6, 505.0], [96.7, 507.0], [96.8, 507.0], [96.9, 507.0], [97.0, 508.0], [97.1, 509.0], [97.2, 511.0], [97.3, 513.0], [97.4, 526.0], [97.5, 527.0], [97.6, 571.0], [97.7, 579.0], [97.8, 580.0], [97.9, 581.0], [98.0, 587.0], [98.1, 593.0], [98.2, 596.0], [98.3, 596.0], [98.4, 599.0], [98.5, 599.0], [98.6, 599.0], [98.7, 600.0], [98.8, 602.0], [98.9, 603.0], [99.0, 14910.0], [99.1, 15002.0], [99.2, 15089.0], [99.3, 15180.0], [99.4, 15200.0], [99.5, 15290.0], [99.6, 15315.0], [99.7, 15381.0], [99.8, 15388.0], [99.9, 15388.0]], "isOverall": false, "label": "GetInventory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 613.0, "series": [{"data": [[0.0, 2.0], [300.0, 124.0], [600.0, 3.0], [200.0, 613.0], [100.0, 168.0], [400.0, 51.0], [15300.0, 4.0], [15200.0, 2.0], [15100.0, 1.0], [15000.0, 2.0], [14900.0, 1.0], [500.0, 29.0]], "isOverall": false, "label": "GetInventory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 959.0, "series": [{"data": [[0.0, 959.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 31.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.769230769230768, "minX": 1.59849534E12, "maxY": 10.0, "series": [{"data": [[1.59849534E12, 10.0], [1.5984954E12, 8.769230769230768]], "isOverall": false, "label": "InventoryService", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5984954E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 132.0, "minX": 1.0, "maxY": 425.1845493562227, "series": [{"data": [[2.0, 303.0], [37.0, 197.75], [39.0, 196.0], [47.0, 132.0], [48.0, 210.0], [3.0, 381.0], [51.0, 209.5], [52.0, 291.0], [61.0, 284.3333333333333], [63.0, 394.3333333333333], [4.0, 379.0], [75.0, 398.6666666666667], [78.0, 406.0], [5.0, 288.0], [94.0, 405.0], [6.0, 217.0], [110.0, 425.1845493562227], [7.0, 203.5], [8.0, 196.5], [9.0, 187.79999999999998], [10.0, 181.33333333333334], [11.0, 185.0], [1.0, 376.0], [24.0, 201.4], [27.0, 210.2]], "isOverall": false, "label": "GetInventory", "isController": false}, {"data": [[104.28900000000002, 412.15999999999934]], "isOverall": false, "label": "GetInventory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 110.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 137.8, "minX": 1.59849534E12, "maxY": 3223.4666666666667, "series": [{"data": [[1.59849534E12, 3223.4666666666667], [1.5984954E12, 176.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59849534E12, 2512.2], [1.5984954E12, 137.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5984954E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 207.55769230769235, "minX": 1.59849534E12, "maxY": 423.38291139240465, "series": [{"data": [[1.59849534E12, 423.38291139240465], [1.5984954E12, 207.55769230769235]], "isOverall": false, "label": "GetInventory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5984954E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 207.5192307692308, "minX": 1.59849534E12, "maxY": 423.36392405063344, "series": [{"data": [[1.59849534E12, 423.36392405063344], [1.5984954E12, 207.5192307692308]], "isOverall": false, "label": "GetInventory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5984954E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.010548523206744, "minX": 1.59849534E12, "maxY": 4.4423076923076925, "series": [{"data": [[1.59849534E12, 4.010548523206744], [1.5984954E12, 4.4423076923076925]], "isOverall": false, "label": "GetInventory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5984954E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 88.0, "minX": 1.59849534E12, "maxY": 15388.0, "series": [{"data": [[1.59849534E12, 15388.0], [1.5984954E12, 381.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59849534E12, 88.0], [1.5984954E12, 124.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59849534E12, 399.0], [1.5984954E12, 275.10000000000014]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59849534E12, 14956.919999999998], [1.5984954E12, 381.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59849534E12, 497.0], [1.5984954E12, 377.04999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5984954E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 200.0, "minX": 5.0, "maxY": 15348.0, "series": [{"data": [[34.0, 304.5], [36.0, 216.0], [37.0, 201.0], [38.0, 283.5], [39.0, 221.0], [41.0, 217.0], [43.0, 216.0], [42.0, 220.0], [45.0, 206.0], [47.0, 200.0], [46.0, 207.5], [18.0, 582.0], [5.0, 376.0], [22.0, 498.5], [6.0, 15348.0], [25.0, 382.0], [28.0, 276.5], [31.0, 397.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 200.0, "minX": 5.0, "maxY": 15348.0, "series": [{"data": [[34.0, 304.5], [36.0, 216.0], [37.0, 201.0], [38.0, 283.5], [39.0, 221.0], [41.0, 217.0], [43.0, 216.0], [42.0, 220.0], [45.0, 206.0], [47.0, 200.0], [46.0, 207.5], [18.0, 582.0], [5.0, 376.0], [22.0, 498.5], [6.0, 15348.0], [25.0, 382.0], [28.0, 276.5], [31.0, 397.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7, "minX": 1.59849534E12, "maxY": 15.966666666666667, "series": [{"data": [[1.59849534E12, 15.966666666666667], [1.5984954E12, 0.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5984954E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.59849534E12, "maxY": 15.8, "series": [{"data": [[1.59849534E12, 15.8], [1.5984954E12, 0.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5984954E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.59849534E12, "maxY": 15.8, "series": [{"data": [[1.59849534E12, 15.8], [1.5984954E12, 0.8666666666666667]], "isOverall": false, "label": "GetInventory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5984954E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.59849534E12, "maxY": 15.8, "series": [{"data": [[1.59849534E12, 15.8], [1.5984954E12, 0.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5984954E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

