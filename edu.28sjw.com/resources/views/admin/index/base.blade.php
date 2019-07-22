<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8"/>

    <!-- Bootstrap -->
    <link href="/admin/css/vendor/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="/admin/css/vendor/animate/animate.min.css">
    <link type="text/css" rel="stylesheet" media="all" href="/admin/js/vendor/mmenu/css/jquery.mmenu.all.css"/>
    <link rel="stylesheet" href="/admin/js/vendor/videobackground/css/jquery.videobackground.css">
    <link rel="stylesheet" href="/admin/css/vendor/bootstrap-checkbox.css">

    <link rel="stylesheet" href="/admin/js/vendor/rickshaw/css/rickshaw.min.css">
    <link rel="stylesheet" href="/admin/js/vendor/morris/css/morris.css">
    <link rel="stylesheet" href="/admin/js/vendor/tabdrop/css/tabdrop.css">
    <link rel="stylesheet" href="/admin/js/vendor/summernote/css/summernote.css">
    <link rel="stylesheet" href="/admin/js/vendor/summernote/css/summernote-bs3.css">
    <link rel="stylesheet" href="/admin/js/vendor/chosen/css/chosen.min.css">
    <link rel="stylesheet" href="/admin/js/vendor/chosen/css/chosen-bootstrap.css">

    <link href="/admin/css/minimal.css" rel="stylesheet">
    @yield('css')
</head>
<body class="bg-1">
<!-- Preloader -->
<div class="mask">
    <div id="loader"></div>
</div>
<!--/Preloader -->

<!-- Wrap all page content here -->
<div id="wrap">
    <!-- Make page fluid -->
    <div class="row">
        <!-- Fixed navbar -->
        <!-- 上面的导航以及侧面栏 -->
        <div class="navbar navbar-default navbar-fixed-top navbar-transparent-black mm-fixed-top" role="navigation"
             id="navbar">
            <!-- Branding -->
            <div class="navbar-header col-md-2">
                <a class="navbar-brand" href="index.html">
                    <strong>MIN</strong>IMAL
                </a>
                <div class="sidebar-collapse">
                    <a href="#">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
            <!-- Branding end -->
            <!-- .nav-collapse -->
            <div class="navbar-collapse">
                <!-- Page refresh -->
                <!-- 刷新按钮 -->
                <ul class="nav navbar-nav refresh">
                    <li class="divided">
                        <a href="#" class="page-refresh"><i class="fa fa-refresh"></i></a>
                    </li>
                </ul>
                <!-- /Page refresh -->
                <!-- Search -->
                <!-- 搜索 -->
                <div class="search" id="main-search">
                    <i class="fa fa-search"></i> <input type="text" placeholder="Search...">
                </div>
                <!-- Search end -->
                <!-- Quick Actions -->
                <!-- 导航栏右边显示区域 -->
                <ul class="nav navbar-nav quick-actions">
                    <li class="dropdown divided">
                        <a class="dropdown-toggle button" data-toggle="dropdown" href="#">
                            <i class="fa fa-tasks"></i>
                            <span class="label label-transparent-black">2</span>
                        </a>
                        <ul class="dropdown-menu wide arrow nopadding bordered">
                            <li><h1>You have <strong>2</strong> new tasks</h1></li>
                            <li>
                                <a href="#">
                                    <div class="task-info">
                                        <div class="desc">Layout</div>
                                        <div class="percent">80%</div>
                                    </div>
                                    <div class="progress progress-striped progress-thin">
                                        <div class="progress-bar progress-bar-green" role="progressbar"
                                             aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                             style="width: 80%">
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="task-info">
                                        <div class="desc">Schemes</div>
                                        <div class="percent">15%</div>
                                    </div>
                                    <div class="progress progress-striped active progress-thin">
                                        <div class="progress-bar progress-bar-cyan" role="progressbar"
                                             aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
                                             style="width: 15%">
                                            <span class="sr-only">45% Complete</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="task-info">
                                        <div class="desc">Forms</div>
                                        <div class="percent">5%</div>
                                    </div>
                                    <div class="progress progress-striped progress-thin">
                                        <div class="progress-bar progress-bar-orange" role="progressbar"
                                             aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 5%">
                                            <span class="sr-only">5% Complete (warning)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="task-info">
                                        <div class="desc">JavaScript</div>
                                        <div class="percent">30%</div>
                                    </div>
                                    <div class="progress progress-striped progress-thin">
                                        <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="45"
                                             aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                                            <span class="sr-only">30% Complete (danger)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="task-info">
                                        <div class="desc">Dropdowns</div>
                                        <div class="percent">60%</div>
                                    </div>
                                    <div class="progress progress-striped progress-thin">
                                        <div class="progress-bar progress-bar-amethyst" role="progressbar"
                                             aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
                                             style="width: 60%">
                                            <span class="sr-only">60% Complete</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li><a href="#">Check all tasks <i class="fa fa-angle-right"></i></a></li>
                        </ul>

                    </li>
                    <li class="dropdown divided">

                        <a class="dropdown-toggle button" data-toggle="dropdown" href="#">
                            <i class="fa fa-envelope"></i>
                            <span class="label label-transparent-black">1</span>
                        </a>

                        <ul class="dropdown-menu wider arrow nopadding messages">
                            <li><h1>You have <strong>1</strong> new message</h1></li>
                            <li>
                                <a class="cyan" href="#">
                                    <div class="profile-photo">
                                        <img src="/admin/images/ici-avatar.jpg" alt/>
                                    </div>
                                    <div class="message-info">
                                        <span class="sender">Ing. Imrich Kamarel</span>
                                        <span class="time">12 mins</span>
                                        <div class="message-content">Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a class="green" href="#">
                                    <div class="profile-photo">
                                        <img src="/admin/images/arnold-avatar.jpg" alt/>
                                    </div>
                                    <div class="message-info">
                                        <span class="sender">Arnold Karlsberg</span>
                                        <span class="time">1 hour</span>
                                        <div class="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <div class="profile-photo">
                                        <img src="/admin/images/profile-photo.jpg" alt/>
                                    </div>
                                    <div class="message-info">
                                        <span class="sender">John Douey</span>
                                        <span class="time">3 hours</span>
                                        <div class="message-content">Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a class="red" href="#">
                                    <div class="profile-photo">
                                        <img src="/admin/images/peter-avatar.jpg" alt/>
                                    </div>
                                    <div class="message-info">
                                        <span class="sender">Peter Kay</span>
                                        <span class="time">5 hours</span>
                                        <div class="message-content">Ut enim ad minim veniam, quis nostrud
                                            exercitation
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a class="orange" href="#">
                                    <div class="profile-photo">
                                        <img src="/admin/images/george-avatar.jpg" alt/>
                                    </div>
                                    <div class="message-info">
                                        <span class="sender">George McCain</span>
                                        <span class="time">6 hours</span>
                                        <div class="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="topborder"><a href="#">Check all messages <i class="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown divided">
                        <a class="dropdown-toggle button" data-toggle="dropdown" href="#">
                            <i class="fa fa-bell"></i>
                            <span class="label label-transparent-black">3</span>
                        </a>
                        <ul class="dropdown-menu wide arrow nopadding bordered">
                            <li><h1>You have <strong>3</strong> new notifications</h1></li>
                            <li>
                                <a href="#">
                                    <span class="label label-green"><i class="fa fa-user"></i></span>
                                    New user registered.
                                    <span class="small">18 mins</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="label label-red"><i class="fa fa-power-off"></i></span>
                                    Server down.
                                    <span class="small">27 mins</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="label label-orange"><i class="fa fa-plus"></i></span>
                                    New order.
                                    <span class="small">36 mins</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="label label-cyan"><i class="fa fa-power-off"></i></span>
                                    Server restared.
                                    <span class="small">45 mins</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="label label-amethyst"><i class="fa fa-power-off"></i></span>
                                    Server started.
                                    <span class="small">50 mins</span>
                                </a>
                            </li>
                            <li><a href="#">Check all notifications <i class="fa fa-angle-right"></i></a></li>
                        </ul>

                    </li>
                    <li class="dropdown divided user" id="current-user">
                        <div class="profile-photo">
                            <!-- 管理员头像 -->
                            <img src="/admin/images/profile-photo.jpg" alt/>
                        </div>
                        <!-- 管理员名称 -->
                        <a class="dropdown-toggle options" data-toggle="dropdown" href="#">
                            {{\Illuminate\Support\Facades\Auth::guard('admin')->user()->username}} <i class="fa fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu arrow settings">
                            <li>
                                <!-- 主题 -->
                                <h3>Backgrounds:</h3>
                                <ul id="color-schemes">
                                    <li><a href="#" class="bg-1"></a></li>
                                    <li><a href="#" class="bg-2"></a></li>
                                    <li><a href="#" class="bg-3"></a></li>
                                    <li><a href="#" class="bg-4"></a></li>
                                    <li><a href="#" class="bg-5"></a></li>
                                    <li><a href="#" class="bg-6"></a></li>
                                </ul>

                                <div class="form-group videobg-check">
                                    <label class="col-xs-8 control-label">Video BG</label>
                                    <div class="col-xs-4 control-label">
                                        <div class="onoffswitch greensea small">
                                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
                                                   id="videobg-check">
                                            <label class="onoffswitch-label" for="videobg-check">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#"><i class="fa fa-user"></i> Profile</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-calendar"></i> Calendar</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-envelope"></i>
                                    Inbox <span class="badge badge-red" id="user-inbox">3</span>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <!-- 登出 -->
                            <li>
                                <a href="{{route('admin_logout')}}"><i class="fa fa-power-off"></i> Logout</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#mmenu"><i class="fa fa-comments"></i></a>
                    </li>
                </ul>
                <!-- /Quick Actions -->
                <!-- Sidebar -->
                <!-- 右侧导航栏 -->
                <ul class="nav navbar-nav side-nav" id="sidebar">
                    <li class="collapsed-content">
                        <ul>
                            <li class="search"><!-- Collapsed search pasting here at 768px --></li>
                        </ul>
                    </li>
                    <li class="navigation" id="navigation">
                        <a href="#" class="sidebar-toggle" data-toggle="#navigation">Navigation <i
                                    class="fa fa-angle-up"></i></a>
                        <ul class="menu">
                            <li class="active">
                                <a href="index.html">
                                    <i class="fa fa-tachometer"></i> Dashboard
                                    <span class="badge badge-red">1</span>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-list"></i> Forms <b class="fa fa-plus dropdown-plus"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="form-elements.html">
                                            <i class="fa fa-caret-right"></i> Common Elements
                                        </a>
                                    </li>
                                    <li>
                                        <a href="validation-elements.html">
                                            <i class="fa fa-caret-right"></i> Validation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-wizard.html">
                                            <i class="fa fa-caret-right"></i> Form Wizard
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-pencil"></i> Interface <b class="fa fa-plus dropdown-plus"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="ui-elements.html">
                                            <i class="fa fa-caret-right"></i> UI Elements
                                        </a>
                                    </li>
                                    <li>
                                        <a href="typography.html">
                                            <i class="fa fa-caret-right"></i> Typography
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tiles.html">
                                            <i class="fa fa-caret-right"></i> Tiles
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="buttons.html">
                                    <i class="fa fa-tint"></i> Buttons & Icons
                                </a>
                            </li>
                            <li>
                                <a href="grid.html">
                                    <i class="fa fa-th"></i> Grid Layout
                                </a>
                            </li>

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-th-large"></i> Tables <b class="fa fa-plus dropdown-plus"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="tables.html">
                                            <i class="fa fa-caret-right"></i> Bootstrap Tables
                                        </a>
                                    </li>
                                    <li>
                                        <a href="datatables.html">
                                            <i class="fa fa-caret-right"></i> DataTables
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-desktop"></i> Example Pages <b class="fa fa-plus dropdown-plus"></b>
                                    <span class="label label-greensea">mails</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="login.html">
                                            <i class="fa fa-caret-right"></i> Login Page
                                        </a>
                                    </li>
                                    <li>
                                        <a href="calendar.html">
                                            <i class="fa fa-caret-right"></i> Calendar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page404.html">
                                            <i class="fa fa-caret-right"></i> Page 404
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page500.html">
                                            <i class="fa fa-caret-right"></i> Page 500
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page-offline.html">
                                            <i class="fa fa-caret-right"></i> Page Offline
                                        </a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                            <i class="fa fa-caret-right"></i> Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="timeline.html">
                                            <i class="fa fa-caret-right"></i> Timeline
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mail.html">
                                            <i class="fa fa-caret-right"></i> Vertical Mail
                                            <span class="badge badge-red">5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mail-horizontal.html">
                                            <i class="fa fa-caret-right"></i> Horizontal Mail
                                            <span class="label label-greensea">mails</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="vector-maps.html">
                                            <i class="fa fa-caret-right"></i> Vector Maps
                                        </a>
                                    </li>
                                    <li>
                                        <a href="google-maps.html">
                                            <i class="fa fa-caret-right"></i> Google Maps
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="widgets.html">
                                    <i class="fa fa-play-circle"></i> Widgets
                                </a>
                            </li>
                            <li>
                                <a href="charts.html">
                                    <i class="fa fa-bar-chart-o"></i> Charts & Graphs
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="summary" id="order-summary">
                        <a href="#" class="sidebar-toggle underline" data-toggle="#order-summary">Orders Summary <i
                                    class="fa fa-angle-up"></i></a>
                        <div class="media">
                            <a class="pull-right" href="#">
                                <span id="sales-chart"></span>
                            </a>
                            <div class="media-body">
                                This week sales
                                <h3 class="media-heading">26, 149</h3>
                            </div>
                        </div>
                        <div class="media">
                            <a class="pull-right" href="#">
                                <span id="balance-chart"></span>
                            </a>
                            <div class="media-body">
                                This week balance
                                <h3 class="media-heading">318, 651</h3>
                            </div>
                        </div>
                    </li>
                    <li class="settings" id="general-settings">
                        <a href="#" class="sidebar-toggle underline" data-toggle="#general-settings">General Settings <i
                                    class="fa fa-angle-up"></i></a>
                        <div class="form-group">
                            <label class="col-xs-8 control-label">Switch ON</label>
                            <div class="col-xs-4 control-label">
                                <div class="onoffswitch greensea">
                                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
                                           id="switch-on" checked="">
                                    <label class="onoffswitch-label" for="switch-on">
                                        <span class="onoffswitch-inner"></span>
                                        <span class="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-8 control-label">Switch OFF</label>
                            <div class="col-xs-4 control-label">
                                <div class="onoffswitch greensea">
                                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
                                           id="switch-off">
                                    <label class="onoffswitch-label" for="switch-off">
                                        <span class="onoffswitch-inner"></span>
                                        <span class="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- Sidebar end -->
            </div>
            <!--/.nav-collapse -->
        </div>
        <!-- Fixed navbar end -->
        <!-- Page content -->
        <div id="content" class="col-md-12">
            <!-- page header -->
            <div class="pageheader">
                <h2><i class="fa fa-tachometer"></i> Dashboard
                    <span>// Place subtitle here...</span></h2>
                <div class="breadcrumbs">
                    <ol class="breadcrumb">
                        <li>You are here</li>
                        <li><a href="index.html">Minimal</a></li>
                        <li class="active">Dashboard</li>
                    </ol>
                </div>
            </div>
            <!-- /page header -->
            <!-- content main container -->
            <div class="main">
                <!-- cards -->
                <div class="row cards">
                    <div class="card-container col-lg-3 col-sm-6 col-sm-12">
                        <div class="card card-redbrown hover">
                            <div class="front">

                                <div class="media">
                      <span class="pull-left">
                        <i class="fa fa-users media-object"></i>
                      </span>
                                    <div class="media-body">
                                        <small>New Users</small>
                                        <h2 class="media-heading animate-number" data-value="3659"
                                            data-animation-duration="1500">0</h2>
                                    </div>
                                </div>
                                <div class="progress-list">
                                    <div class="details">
                                        <div class="title">This month plan %</div>
                                    </div>
                                    <div class="status pull-right bg-transparent-black-1">
                                        <span class="animate-number" data-value="83"
                                              data-animation-duration="1500">0</span>%
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="progress progress-little progress-transparent-black">
                                        <div class="progress-bar animate-progress-bar" data-percentage="83%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="back">
                                <a href="#">
                                    <i class="fa fa-bar-chart-o fa-4x"></i>
                                    <span>Check Summary</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-container col-lg-3 col-sm-6 col-sm-12">
                        <div class="card card-blue hover">
                            <div class="front">

                                <div class="media">
                      <span class="pull-left">
                        <i class="fa fa-shopping-cart media-object"></i>
                      </span>
                                    <div class="media-body">
                                        <small>New Orders</small>
                                        <h2 class="media-heading animate-number" data-value="19214"
                                            data-animation-duration="1500">0</h2>
                                    </div>
                                </div>
                                <div class="progress-list">
                                    <div class="details">
                                        <div class="title">This month plan %</div>
                                    </div>
                                    <div class="status pull-right bg-transparent-black-1">
                                        <span class="animate-number" data-value="100"
                                              data-animation-duration="1500">0</span>%
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="progress progress-little progress-transparent-black">
                                        <div class="progress-bar animate-progress-bar" data-percentage="100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="back">
                                <a href="#">
                                    <i class="fa fa-bar-chart-o fa-4x"></i>
                                    <span>Check Summary</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-container col-lg-3 col-sm-6 col-sm-12">
                        <div class="card card-greensea hover">
                            <div class="front">

                                <div class="media">
                      <span class="pull-left">
                        <i class="fa fa-usd media-object"></i>
                      </span>
                                    <div class="media-body">
                                        <small>Sales</small>
                                        <h2 class="media-heading animate-number" data-value="169541"
                                            data-animation-duration="1500">0</h2>
                                    </div>
                                </div>
                                <div class="progress-list">
                                    <div class="details">
                                        <div class="title">This month plan %</div>
                                    </div>
                                    <div class="status pull-right bg-transparent-black-1">
                                        <span class="animate-number" data-value="42"
                                              data-animation-duration="1500">0</span>%
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="progress progress-little progress-transparent-black">
                                        <div class="progress-bar animate-progress-bar" data-percentage="42%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="back">
                                <a href="#">
                                    <i class="fa fa-bar-chart-o fa-4x"></i>
                                    <span>Check Summary</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-container col-lg-3 col-sm-6 col-xs-12">
                        <div class="card card-slategray hover">
                            <div class="front">
                                <div class="media">
                      <span class="pull-left">
                        <i class="fa fa-eye media-object"></i>
                      </span>
                                    <div class="media-body">
                                        <small>Visits</small>
                                        <h2 class="media-heading animate-number" data-value="9634"
                                            data-animation-duration="1500">0</h2>
                                    </div>
                                </div>
                                <div class="progress-list">
                                    <div class="details">
                                        <div class="title">This month plan %</div>
                                    </div>
                                    <div class="status pull-right bg-transparent-black-1">
                                        <span class="animate-number" data-value="25"
                                              data-animation-duration="1500">0</span>%
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="progress progress-little progress-transparent-black">
                                        <div class="progress-bar animate-progress-bar" data-percentage="25%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="back">
                                <a href="#">
                                    <i class="fa fa-bar-chart-o fa-4x"></i>
                                    <span>Check Summary</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /cards -->
                <!-- 中间的内容 -->
                @yield("content")
            </div>
            <!-- /content container -->
        </div>
        <!-- Page content end -->
    </div>
    <!-- Make page fluid-->
</div>
<!-- Wrap all page content end -->
<section class="videocontent" id="video"></section>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="/admin/js/jquery.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="/admin/js/vendor/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="/admin/js/vendor/mmenu/js/jquery.mmenu.min.js"></script>
<script type="text/javascript" src="/admin/js/vendor/sparkline/jquery.sparkline.min.js"></script>
<script type="text/javascript" src="/admin/js/vendor/nicescroll/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="/admin/js/vendor/animate-numbers/jquery.animateNumbers.js"></script>
<script type="text/javascript" src="/admin/js/vendor/videobackground/jquery.videobackground.js"></script>
<script type="text/javascript" src="/admin/js/vendor/blockui/jquery.blockUI.js"></script>

<script src="/admin/js/vendor/flot/jquery.flot.min.js"></script>
<script src="/admin/js/vendor/flot/jquery.flot.time.min.js"></script>
<script src="/admin/js/vendor/flot/jquery.flot.selection.min.js"></script>
<script src="/admin/js/vendor/flot/jquery.flot.animator.min.js"></script>
<script src="/admin/js/vendor/flot/jquery.flot.orderBars.js"></script>
<script src="/admin/js/vendor/easypiechart/jquery.easypiechart.min.js"></script>

<script src="/admin/js/vendor/rickshaw/raphael-min.js"></script>
<script src="/admin/js/vendor/rickshaw/d3.v2.js"></script>
<script src="/admin/js/vendor/rickshaw/rickshaw.min.js"></script>

<script src="/admin/js/vendor/morris/morris.min.js"></script>

<script src="/admin/js/vendor/tabdrop/bootstrap-tabdrop.min.js"></script>

<script src="/admin/js/vendor/summernote/summernote.min.js"></script>

<script src="/admin/js/vendor/chosen/chosen.jquery.min.js"></script>

<script src="/admin/js/minimal.min.js"></script>
@yield('js')
<script>
    $(function(){

        // Initialize card flip
        $('.card.hover').hover(function(){
            $(this).addClass('flip');
        },function(){
            $(this).removeClass('flip');
        });

        // Initialize flot chart
        var d1 =[ [1, 715],
            [2, 985],
            [3, 1525],
            [4, 1254],
            [5, 1861],
            [6, 2621],
            [7, 1987],
            [8, 2136],
            [9, 2364],
            [10, 2851],
            [11, 1546],
            [12, 2541]
        ];
        var d2 =[ [1, 463],
            [2, 578],
            [3, 327],
            [4, 984],
            [5, 1268],
            [6, 1684],
            [7, 1425],
            [8, 1233],
            [9, 1354],
            [10, 1200],
            [11, 1260],
            [12, 1320]
        ];
        var months = ["January", "February", "March", "April", "May", "Juny", "July", "August", "September", "October", "November", "December"];

        // flot chart generate
        var plot = $.plotAnimator($("#statistics-chart"),
            [
                {
                    label: 'Sales',
                    data: d1,
                    lines: {lineWidth:3},
                    shadowSize:0,
                    color: '#ffffff'
                },
                { label: "Visits",
                    data: d2,
                    animator: {steps: 99, duration: 500, start:200, direction: "right"},
                    lines: {
                        fill: .15,
                        lineWidth: 0
                    },
                    color:['#ffffff']
                },{
                label: 'Sales',
                data: d1,
                points: { show: true, fill: true, radius:6,fillColor:"rgba(0,0,0,.5)",lineWidth:2 },
                color: '#fff',
                shadowSize:0
            },
                { label: "Visits",
                    data: d2,
                    points: { show: true, fill: true, radius:6,fillColor:"rgba(255,255,255,.2)",lineWidth:2 },
                    color: '#fff',
                    shadowSize:0
                }
            ],{

                xaxis: {

                    tickLength: 0,
                    tickDecimals: 0,
                    min:1,
                    ticks: [[1,"JAN"], [2, "FEB"], [3, "MAR"], [4, "APR"], [5, "MAY"], [6, "JUN"], [7, "JUL"], [8, "AUG"], [9, "SEP"], [10, "OCT"], [11, "NOV"], [12, "DEC"]],

                    font :{
                        lineHeight: 24,
                        weight: "300",
                        color: "#ffffff",
                        size: 14
                    }
                },

                yaxis: {
                    ticks: 4,
                    tickDecimals: 0,
                    tickColor: "rgba(255,255,255,.3)",

                    font :{
                        lineHeight: 13,
                        weight: "300",
                        color: "#ffffff"
                    }
                },

                grid: {
                    borderWidth: {
                        top: 0,
                        right: 0,
                        bottom: 1,
                        left: 1
                    },
                    borderColor: 'rgba(255,255,255,.3)',
                    margin:0,
                    minBorderMargin:0,
                    labelMargin:20,
                    hoverable: true,
                    clickable: true,
                    mouseActiveRadius:6
                },

                legend: { show: false}
            });

        $(window).resize(function() {
            // redraw the graph in the correctly sized div
            plot.resize();
            plot.setupGrid();
            plot.draw();
        });

        $('#mmenu').on(
            "opened.mm",
            function()
            {
                // redraw the graph in the correctly sized div
                plot.resize();
                plot.setupGrid();
                plot.draw();
            }
        );

        $('#mmenu').on(
            "closed.mm",
            function()
            {
                // redraw the graph in the correctly sized div
                plot.resize();
                plot.setupGrid();
                plot.draw();
            }
        );

        // tooltips showing
        $("#statistics-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0],
                    y = item.datapoint[1];

                $("#tooltip").html('<h1 style="color: #418bca">' + months[x - 1] + '</h1>' + '<strong>' + y + '</strong>' + ' ' + item.series.label)
                    .css({top: item.pageY-30, left: item.pageX+5})
                    .fadeIn(200);
            } else {
                $("#tooltip").hide();
            }
        });


        //tooltips options
        $("<div id='tooltip'></div>").css({
            position: "absolute",
            //display: "none",
            padding: "10px 20px",
            "background-color": "#ffffff",
            "z-index":"99999"
        }).appendTo("body");

        //generate actual pie charts
        $('.pie-chart').easyPieChart();


        //server load rickshaw chart
        var graph;

        var seriesData = [ [], []];
        var random = new Rickshaw.Fixtures.RandomData(50);

        for (var i = 0; i < 50; i++) {
            random.addData(seriesData);
        }

        graph = new Rickshaw.Graph( {
            element: document.querySelector("#serverload-chart"),
            height: 150,
            renderer: 'area',
            series: [
                {
                    data: seriesData[0],
                    color: '#6e6e6e',
                    name:'File Server'
                },{
                    data: seriesData[1],
                    color: '#fff',
                    name:'Mail Server'
                }
            ]
        } );

        var hoverDetail = new Rickshaw.Graph.HoverDetail( {
            graph: graph,
        });

        setInterval( function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();

        },1000);

        // Morris donut chart
        Morris.Donut({
            element: 'browser-usage',
            data: [
                {label: "Chrome", value: 25},
                {label: "Safari", value: 20},
                {label: "Firefox", value: 15},
                {label: "Opera", value: 5},
                {label: "Internet Explorer", value: 10},
                {label: "Other", value: 25}
            ],
            colors: ['#00a3d8', '#2fbbe8', '#72cae7', '#d9544f', '#ffc100', '#1693A5']
        });

        $('#browser-usage').find("path[stroke='#ffffff']").attr('stroke', 'rgba(0,0,0,0)');

        //sparkline charts
        $('#projectbar1').sparkline('html', {type: 'bar', barColor: '#22beef', barWidth: 4, height: 20});
        $('#projectbar2').sparkline('html', {type: 'bar', barColor: '#cd97eb', barWidth: 4, height: 20});
        $('#projectbar3').sparkline('html', {type: 'bar', barColor: '#a2d200', barWidth: 4, height: 20});
        $('#projectbar4').sparkline('html', {type: 'bar', barColor: '#ffc100', barWidth: 4, height: 20});
        $('#projectbar5').sparkline('html', {type: 'bar', barColor: '#ff4a43', barWidth: 4, height: 20});
        $('#projectbar6').sparkline('html', {type: 'bar', barColor: '#a2d200', barWidth: 4, height: 20});

        // sortable table
        $('.table.table-sortable th.sortable').click(function() {
            var o = $(this).hasClass('sort-asc') ? 'sort-desc' : 'sort-asc';
            $('th.sortable').removeClass('sort-asc').removeClass('sort-desc');
            $(this).addClass(o);
        });

        //todo's
        $('#todolist li label').click(function() {
            $(this).toggleClass('done');
        });

        // Initialize tabDrop
        $('.tabdrop').tabdrop({text: '<i class="fa fa-th-list"></i>'});

        //load wysiwyg editor
        $('#quick-message-content').summernote({
            toolbar: [
                //['style', ['style']], // no style button
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                //['insert', ['picture', 'link']], // no insert buttons
                //['table', ['table']], // no table button
                //['help', ['help']] //no help button
            ],
            height: 143   //set editable area's height
        });

        //multiselect input
        $(".chosen-select").chosen({disable_search_threshold: 10});

    })

</script>
</body>
</html>
