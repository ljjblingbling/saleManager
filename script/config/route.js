app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
        // $httpProvider.interceptors.push('loadingInterceptor');
        //清除路由缓存
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        $urlRouterProvider.otherwise('/index');
          $stateProvider
            .state('index', {
                url: '/index',
                templateUrl:'tpls/saleRole/index.html'
            })
            // .state('index.welcome', {
            //     url: '/welcome',
            //     templateUrl:'tpls/saleRole/welcome.html',
            //     controller: 'IndexContrl'
            // })
            //设备助理
             //添加设备
            .state('index.equipAdd', {
                url: '/equipAdd', //添加设备
                templateUrl:'tpls/saleRole/equipAdd.html',
                controller: 'equipAdd'
            })
            //设备销售单管理
            .state('index.equipSaleManageAll', {
                url: '/equipSaleManageAll', //设备销售单管理
                templateUrl:'tpls/saleRole/equipSaleManageAll.html',
                controller: 'equipSaleManage'
            })
            .state('index.equipSaleManageDetail', {
                url: '/equipSaleManageDetail', //设备销售单明细（提交前，提交后，进货，退货）
                templateUrl:'tpls/saleRole/equipSaleManageDetail.html',
                controller: 'equipSaleManage'
            })
            //设备销售单退单管理
            .state('index.equipReturnAll', {
                url: '/equipReturnAll', //设备退货单管理
                templateUrl:'tpls/saleRole/equipReturnAll.html',
                controller: 'equipReturn'
            })
            .state('index.equipReturnDetail', {
                url: '/equipReturnDetail', //设备退货单明细（提交前，提交后，确认到账1，确认到账2）
                templateUrl:'tpls/saleRole/equipReturnDetail.html',
                controller: 'equipReturn'
            })
            //设备进货单管理
            .state('index.equipPurchaseAll', {
                url: '/equipPurchaseAll',  //设备进货单管理
                templateUrl:'tpls/saleRole/equipPurchaseAll.html',
                controller: 'equipPurchase'
            })
            .state('index.equipPurchaseDetail', {
                url: '/equipPurchaseDetail', //设备进货单明细
                templateUrl:'tpls/saleRole/equipPurchaseDetail.html',
                controller: 'equipPurchase'
            })
            //财务人员
            //设备销售单管理
            .state('index.equipSaleManageAllCw', {
                url: '/equipSaleManageAllCw',  //设备销售单管理
                templateUrl:'tpls/financeRole/equipSaleManageAllCw.html',
                controller: 'equipSaleManageCw'
            })
            .state('index.equipSaleManageDetailCw', {
                url: '/equipSaleManageDetailCw',  //设备销售单明细（提交前，提交后）
                templateUrl:'tpls/financeRole/equipSaleManageDetailCw.html',
                controller: 'equipSaleManageCw'
            })
            //设备销售单退单管理
            .state('index.equipReturnAllCw', {
                url: '/equipReturnAllCw',  //设备退货单管理
                templateUrl:'tpls/financeRole/equipReturnAllCw.html',
                controller: 'equipReturnCw'
            })
            .state('index.equipReturnDetailCw', {
                url: '/equipReturnDetailCw', //设备退货单明细（提交前，提交后）
                templateUrl:'tpls/financeRole/equipReturnDetailCw.html',
                controller: 'equipReturnCw'
            })
            //设备进货单管理
            .state('index.equipPurchaseAllCw', {
                url: '/equipPurchaseAllCw', //设备进货单管理
                templateUrl:'tpls/financeRole/equipPurchaseAllCw.html',
                controller: 'equipPurchaseCw'
            })
            .state('index.equipPurchaseDetailCw', {
                url: '/equipPurchaseDetailCw', //设备进货单明细（提交前，提交后）
                templateUrl:'tpls/financeRole/equipPurchaseDetailCw.html',
                controller: 'equipPurchaseCw'
            })
            //设备进货单退单管理
            .state('index.equipJhReturnAllCw', {
                url: '/equipJhReturnAllCw', //设备进货单退单管理
                templateUrl:'tpls/financeRole/equipJhReturnAllCw.html',
                controller: 'equipJhReturnAllCw'
            })
            .state('index.equipJhReturnDetailCw', {
                url: '/equipJhReturnDetailCw', //设备进货单退单明细
                templateUrl:'tpls/financeRole/equipJhReturnDetailCw.html',
                controller: 'equipJhReturnAllCw'
            })
            //设备结算单管理
            .state('index.equipSettleManageCw', {
                url: '/equipSettleManageCw',  //设备结算单管理
                templateUrl:'tpls/financeRole/equipSettleManageCw.html',
                controller: 'equipSettleManageCw'
            })
            .state('index.equipSettleManageDetailCw', {
                url: '/equipSettleManageDetailCw', //设备结算单明细
                templateUrl:'tpls/financeRole/equipSettleManageDetailCw.html',
                controller: 'equipSettleManageCw'
            })
            //设备管理
            .state('index.equipListCw', {
                url: '/equipListCw', //设备列表
                templateUrl:'tpls/financeRole/equipListCw.html',
                controller: 'equipManageCw'
            })
            .state('index.equipPackageCw', {
                url: '/equipPackageCw', //设备套餐
                templateUrl:'tpls/financeRole/equipPackageCw.html',
                controller: 'equipManageCw'
            })
            .state('index.equipClassCw', {
                url: '/equipClassCw', //设备分类
                templateUrl:'tpls/financeRole/equipClassCw.html',
                controller: 'equipManageCw'
            })
            .state('index.equipDetailsCw', {
                url: '/equipDetailsCw', //设备详情
                templateUrl:'tpls/financeRole/equipDetailsCw.html',
                controller: 'equipManageCw'
            })
            .state('index.addEquipmentCw', {
                url: '/addEquipmentCw', //新增设备
                templateUrl:'tpls/financeRole/addEquipmentCw.html',
                controller: 'equipManageCw'
            })
            .state('index.equipPackageDetailsCw', {
                url: '/equipPackageDetailsCw', //设备套餐详情
                templateUrl:'tpls/financeRole/equipPackageDetailsCw.html',
                controller: 'equipManageCw'
            })
            .state('index.equipClassDetailsCw', {
                url: '/equipClassDetailsCw', //设备分类详情
                templateUrl:'tpls/financeRole/equipClassDetailsCw.html',
                controller: 'equipManageCw'
            })
            .state('index.equipNewClassCw', {
                url: '/equipNewClassCw', //新建分类
                templateUrl:'tpls/financeRole/equipNewClassCw.html',
                controller: 'equipManageCw'
            })
            //供应商人员
            //设备进货单管理
            .state('index.equipPurchaseAllPro', {
                url: '/equipPurchaseAllPro', //设备进货单管理
                templateUrl:'tpls/producerRole/equipPurchaseAllPro.html',
                controller: 'equipPurchasePro'
            })
            .state('index.equipPurchaseDetailPro', {
                url: '/equipPurchaseDetailPro', //设备进货单明细（提交前，提交后）
                templateUrl:'tpls/producerRole/equipPurchaseDetailPro.html',
                controller: 'equipPurchasePro'
            })
            //设备进货单退单管理
            .state('index.equipJhReturnAllPro', {
                url: '/equipJhReturnAllPro', //设备进货单退单管理
                templateUrl:'tpls/producerRole/equipJhReturnAllPro.html',
                controller: 'equipJhReturnPro'
            })
            .state('index.equipJhReturnDetailPro', {
                url: '/equipJhReturnDetailPro', //设备进货单退单明细
                templateUrl:'tpls/producerRole/equipJhReturnDetailPro.html',
                controller: 'equipJhReturnPro'
            })
    }]);
