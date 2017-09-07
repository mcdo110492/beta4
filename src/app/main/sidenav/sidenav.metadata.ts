

export const superAdminMetaData = [
    { isHeader : true, header : 'master data' , 
      list :[
        { title : 'minister', routeUrl : 'minister', icon :'storage' }
      ] 
    },
    { isHeader : true, header : 'certificates' , 
      list :[
        { title : 'baptism', routeUrl : 'baptism' ,icon :'view_list' },
        { title : 'confirmation', routeUrl : 'confirmation', icon :'view_list' },
        { title : 'death', routeUrl : 'death', icon :'view_list' },
        { title : 'marriage', routeUrl : 'marriage', icon :'view_list' }
      ] 
    }
    ,
    { isHeader : true, header : 'accounting' , 
      list :[
        { title : 'item type', routeUrl : 'item/type' ,icon :'format_list_bulleted' },
        { title : 'item price', routeUrl : 'item/price' ,icon :'format_list_bulleted' },
        { title : 'group', routeUrl : 'group' ,icon :'format_list_bulleted' },
        { title : 'pos', routeUrl : 'pos' ,icon :'monetization_on' },
        { title : 'invoices', routeUrl : 'invoices' ,icon :'receipt' },
        { title : 'invoice reports', routeUrl : 'invoice/reports' ,icon :'library_books' }
      ] 
    }
];

export const recordMetaData = [
    { isHeader : true, header : 'certificates' , 
      list :[
        { title : 'baptism', routeUrl : 'baptism' ,icon :'view_list' },
        { title : 'confirmation', routeUrl : 'confirmation', icon :'view_list' },
        { title : 'death', routeUrl : 'death', icon :'view_list' },
        { title : 'marriage', routeUrl : 'marriage', icon :'view_list' }
      ] 
    }
];