
    <!--page-->

    <!-- groups -->
    <div id="groups" class="groups_page">
        <div class="container">
            <div class="row-fluid">
                <div class="span3">
                    <!-- header -->
                    <h2 class="section_header left">
                        <span data-localize="groups.xatgroups"><?php echo XAT_NAME ?> Groups</span>
                    </h2>
                </div>
                <div class="pull-right">
                    <!-- search -->
                    <div id="groupsearch" class="container-fluid searchbox">
                        <form method="post" action="//<?php echo DOMAIN ?>/web_gear/chat/search.php" class="form-search form-span inline-center">
                            <input autocomplete="off" name="search" value="" type="text" class="input-medium search-query" placeholder="Find out what people are talking about" style="width: 380px"; data-localize="index.findout"/>
                            <button type="submit" class="btn"><i class="icon-search"></i>&nbsp;<span data-localize="groups.searchb">Search</span></button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="span7 pull-left">
                    <!-- nav -->
                    <ul class="nav nav-pills">
                        <li><a id="featured" href="#" data-localize="groups.featured">Featured</a></li>
                        <li><a id="popular" href="#" data-localize="groups.popular">Popular</a></li>
                        <li><a id="supported" href="#" data-localize="groups.supported">Supported</a></li>
                        <li><a id="games" href="#" data-localize="groups.games">Games</a></li>
<!--
                        <li><a id="favorites" href="#" data-localize="groups.favorites">Favorites</a></li>
                        <li><a id="recent" href="#" data-localize="groups.recent">Recent</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <span data-localize="groups.categories">Categories</span><b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Anime</a></li>
                                <li><a href="#">Emo</a></li>
                                <li><a href="#">Videogames</a></li>
                            </ul>
                        </li>
-->
                    </ul>
                </div>
                <div class="span5 pull-right">
                    <!-- pagination -->
                    <div id="pagination" class="pagination pagination-right">
                        <ul>
                            <li><a id="pprev" href="#">&laquo;</a></li>
                            <li><a id="p1" href="#">1</a></li>
                            <li><a id="p2" href="#">2</a></li>
                            <li><a id="p3" href="#">3</a></li>
                            <li><a id="p4" href="#">4</a></li>
                            <li><a id="p5" href="#">5</a></li>
                            <li><a id="pnext" href="#">&raquo;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- list -->
            <div class="row col4">
                <div id="thumbs" class="span12"></div>
            </div>
            <!-- pager -->
            <ul id="pager" class="pager">
                <li class="previous"><a id="prev" href="#" data-localize="groups.prev">&laquo;&nbsp;Previous</a></li>
                <li class="next"><a id="next" href="#" data-localize="groups.next">Next&nbsp;&raquo;</a></li>
            </ul>
        </div>
    </div>
    <!--/page-->
