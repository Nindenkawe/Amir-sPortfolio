/* (function (window, document, undefined) {
    var door = $('.door'),
        handle = $('.handle'),
        rack = $('.rack');
    
    rack.sortable();
    
    handle.on('click', function (e) {
      e.stopPropagation();
      
      door.toggleClass('open');
    });
    
  }(window, document));
 */


/*   export const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
   */

import axios from 'axios'
import type {App} from 'vue'

interface AxiosOptions {
    baseUrl?: string
    token?: string
}

export default {
    install: (app: App, options: AxiosOptions) => {
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
            headers: {
                Authorization: options.token ? `Bearer ${options.token}` : '',
            }
        })
    }
}