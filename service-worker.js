/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2018/07/30/python-2.7升级到python-3.7/index.html","7ac3ba6ed815384a4232ac157384cdf3"],["D:/blog/public/2018/08/01/redis-sentinel集群配置(一主两从三哨兵)/index.html","47ee62a592b2c41a7951d3dee004b60a"],["D:/blog/public/2018/08/02/centos7.4yum安装gcc报错/index.html","db95e0a9231cccbfe1096ce0ae871c84"],["D:/blog/public/2018/08/02/redis-cluster集群部署/index.html","84b377a6ede613b9e25e5392fb71edc3"],["D:/blog/public/2018/08/03/mongdob4.0/index.html","e51b57bbd367f6bc2d6a2ee1d64bb8e1"],["D:/blog/public/2018/08/03/zabbix-nginx/index.html","7ed1fbc886220cdbe948bf482b799071"],["D:/blog/public/2018/08/05/mongodb-集群/index.html","cf62e1c92d93840ee37ca46805f385ab"],["D:/blog/public/2018/08/07/5.7.22-log版本mysql,mha主从环境，从库报错信息/index.html","2a43da16c57569924ffa1732251c39a7"],["D:/blog/public/2018/08/08/mongodb-sharding-cluster部署/index.html","40494889bdd33e49e8d62753cad9c540"],["D:/blog/public/2018/08/09/mysqldump逻辑备份及恢复/index.html","67d0212bfe49e8100823633d237635bd"],["D:/blog/public/2018/08/10/mysql定时备份及邮件告知备份情况/index.html","13ef578d242bfa887fe23c5bc53b9ba5"],["D:/blog/public/2018/08/11/mysql- Lock wait timeout exceeded; try restarting transaction/index.html","71be16ad8d17212736702afc5f9b375f"],["D:/blog/public/2018/08/11/使用innodb trx和innodb lock信息表查看锁事物/index.html","77ffa8582479a84de3183535d1c193e5"],["D:/blog/public/2018/08/12/mongdob4.0 备份与恢复/index.html","50d9b66c2a33c1edf17fce8692774f1f"],["D:/blog/public/2018/08/12/mongodb4.0定时备份并邮件告知备份情况/index.html","2ef84732347eb431f78311e57f071c70"],["D:/blog/public/2018/08/14/mysql-innodb buffer pool size调整/index.html","276b1e9bd529368451d5559e2f968ed8"],["D:/blog/public/2018/08/14/zabbix监控mysql/index.html","daa4031d682f327aff5c801c7d849a15"],["D:/blog/public/2018/08/14/去掉查询结果中带的mysql [Warning] Using a password on the command line interface can be insecure/index.html","0ab05c2ee9e3a11c90635d653f5f51c5"],["D:/blog/public/2018/08/15/zabbix监控mongodb/index.html","1e943d9237ce9cfc848073b99607ae2e"],["D:/blog/public/2018/08/17/mysql lock table && unlock tables实验/index.html","b58f98f47922218d7554ea9dbaf75e11"],["D:/blog/public/2018/08/17/samba配置/index.html","b206c577c927fb8fd5b5fc91b0cd7e79"],["D:/blog/public/2018/08/17/zabbix监控redis/index.html","c77d97f445bd6f85becc7654f04c80cc"],["D:/blog/public/2018/08/20/mysql-mgr集群节点主节点与两个从节点网络异常，造成的集群异常问题/index.html","232c8d747c9b0d8ce427f78568853781"],["D:/blog/public/2018/08/21/InnoDB-page_cleaner-1000ms intended loop took xxxms/index.html","5aece4a1f8aa81fd854d6d6a3ab34908"],["D:/blog/public/2018/08/23/centos7.2服务器使用df -h卡死问题/index.html","d4bf5a3b29060c268942e74e06fb6519"],["D:/blog/public/2018/08/27/zabbix-agent批量安装/index.html","51690f333980b4b10e3e00a9a53098b4"],["D:/blog/public/2018/08/27/zabbix-server安装配置/index.html","be05cbd6386d3f9e878fbdafcbde7983"],["D:/blog/public/2018/08/27/zabbix监控cassandra数据库/index.html","d4ccd7a221525b2ddc74b8364c8c0861"],["D:/blog/public/2018/08/27/zabbix监控磁盘io总吞吐量/index.html","ae677ecfbb71bcd4069600cd9e7a098d"],["D:/blog/public/2018/08/28/解决zabbix中文乱码/index.html","47cfbc1c879cf852dd79d6d2f45a571e"],["D:/blog/public/2018/08/29/grafana+prometheus安装配置监控mysql、redis、mongodb/index.html","0b0ec1f2e01f6b2528ad91036b181702"],["D:/blog/public/2018/09/04/mysql blackhole-engine/index.html","58322fdee4cb8a1e08e8c693f4b0a0f0"],["D:/blog/public/2018/09/04/使用mysqladmin查看innodb_buffer_pool缓存命中率及缓存使用情况/index.html","7be6bd9bd1ce940fb68aa741e5ab9a94"],["D:/blog/public/2018/09/05/mysql前缀索引/index.html","145cdd547486c707bc7e31d4340e1fd0"],["D:/blog/public/2018/09/05/mysql唯一性索引/index.html","63699514d7e97794b857293c8ffaf263"],["D:/blog/public/2018/09/06/mysql binary排序规则与_bin排序规则对比/index.html","9be06f30ea13776b7e839b6be55785c2"],["D:/blog/public/2018/09/07/云交易所建库、修改多个表的语句/index.html","5095bf127c66d8675014dd1cf58fa32c"],["D:/blog/public/2018/09/08/mysql报错-[ERROR] InnoDB-Unable to lock -ibdata1/index.html","0f32d6a6cda2e55041490bc452407cb0"],["D:/blog/public/2018/09/09/mysql show processlist详解/index.html","e430049e4a62b33054cc634653a03c12"],["D:/blog/public/2018/09/09/mysql update一条语句过程遇到的问题/index.html","c11f703f9371ef74715524ae26b0f443"],["D:/blog/public/2018/09/10/mysql innodb_locks参数详解/index.html","b3b2b16f6d7644a465c4aa299e84ebbf"],["D:/blog/public/2018/09/10/mysql innodb_trx参数详解/index.html","9fa860a0aaf478d561fb031bfa22891d"],["D:/blog/public/2018/09/10/mysql-Lock wait timeout exceeded; try restarting transaction/index.html","d9f698f8d0f060298c8c6b2e1e4f7465"],["D:/blog/public/2018/09/11/mysql limit参数详解及使用过程遇到的问题/index.html","0c943e16978cf93d9e32a5b84993c7c2"],["D:/blog/public/2018/09/12/mysql 切割慢日志另附定期切割日志脚本/index.html","403848ee0f88d577226458ae552f8d84"],["D:/blog/public/2018/09/12/mysqldumpslow参数详解/index.html","b98628f7253d5d2ec0b54469b6968c2c"],["D:/blog/public/2018/09/13/Multi-threaded slave statistics for channel 'group_replication_applier'/index.html","de207a589e517d37b5cab24b235d80ee"],["D:/blog/public/2018/09/14/cassandra安装部署/index.html","82ac026629a0bf2ace3f19b30c5ec648"],["D:/blog/public/2018/09/14/mysql mgr从节点down恢复过程遇到的问题/index.html","b603cd42a270eeb96e1e021b4b68fa70"],["D:/blog/public/2018/09/26/mysql 勿操作drop table之后，利用mysqldump备份和binlog去恢复/index.html","d7c82d1faa5de4c6f73a674ec4a40aa3"],["D:/blog/public/2018/09/28/使用certbot为域名生成免费证书(apache版)/index.html","0bacd246ff187143375f6f4b62e85810"],["D:/blog/public/2018/10/08/使用mysqldiff和mysqldbcompare比较数据库差异/index.html","6703fbec73de21662d618831cad71b39"],["D:/blog/public/2018/10/17/mysql--The table is probably corrupted/index.html","33bc5321b5c59dfa86f51562552fa0c8"],["D:/blog/public/2018/10/18/linux区分当前服务器是物理机还是虚拟机/index.html","04d9d5cac0dd6c2f404847d351d6fffb"],["D:/blog/public/2018/10/18/mysql忘记root密码，修改密码方法/index.html","7328ecf4995e018ef82ab9ec87b1ddff"],["D:/blog/public/2018/10/22/oracle 定期删除trace文件/index.html","223dfa02a2505faef61f268fb1ec2ca6"],["D:/blog/public/2018/10/22/oracle-audit_file_dest和audit_trail参数详解/index.html","504a115203c16cbb8be6a259ed8fb0ab"],["D:/blog/public/2018/10/24/hp交换机启用snmp，并添加到zabbix监控/index.html","9f73efe7cb60c3bd5ada13d4a2ef46c6"],["D:/blog/public/2018/10/25/mysql-MGR集群配置/index.html","a58c4cfd424f38d41d7e1a3052c1297d"],["D:/blog/public/2018/10/25/mysql数据库使用innobackupex和mysqldump备份恢复的对比/index.html","fe5ea4dee578a55ec6c3341fd2e2719d"],["D:/blog/public/2018/10/25/一台服务器安装多个mysql数据库程序/index.html","a5bbbd4fea6b40c1ef3fcc75bfe6adfa"],["D:/blog/public/2018/10/25/安装mysqlclient客户端/index.html","60f378a1bca83196206d53b5fd8eef78"],["D:/blog/public/2018/10/27/安装mysqlclient客户端/index.html","d08c64db80b8dd3d2584367e6d939cbb"],["D:/blog/public/2018/10/28/Old incarnation found while trying to add node/index.html","821c8b78b86149b6caa6795c9b29cc6b"],["D:/blog/public/2018/10/30/测试mysql or和in对sql查询效率的影响/index.html","e22e03d3b00f4bb02f1e8932cadc7b93"],["D:/blog/public/2018/10/30/测试mysql where条件顺序对sql查询效率的影响/index.html","bd2492089de1189374e1e73dc515be70"],["D:/blog/public/2018/10/31/nginx https证书配置/index.html","d6be2f4882e35b5984f233808aeadba0"],["D:/blog/public/2018/10/31/oracle 静默安装/index.html","d3a153f5dcad5726fb1db235efaffc00"],["D:/blog/public/2018/11/01/mysql-Can't start group replication on secondary member with single primary-mode while asynchronous replication channels are running/index.html","35cbfe15a22ed757b0684d4b63641c4f"],["D:/blog/public/2018/11/01/mysql使用备份的.frm文件恢复表结构/index.html","edb98a3859598978bea62ce48924750c"],["D:/blog/public/2018/11/06/centos安装vsftp/index.html","ff92823f27c9803f6f61ea10a6c3b796"],["D:/blog/public/2018/11/06/mysql意外drop表之后，使用innobackupex恢复/index.html","43486de126073ab809c08b0a0dd5e71b"],["D:/blog/public/2018/11/07/oracle本地表空间在uniform、system等不同模式下分配extent方式/index.html","b4cb09ca65a48764301389f0fc0bff62"],["D:/blog/public/2018/11/09/mysql-mgr单主模式切换为多主/index.html","13ec5638721b8f53d15180b2b7de447f"],["D:/blog/public/2018/11/09/mysql-mgr解散集群并重新添加/index.html","89b1ec96a0862ed67f16944d56de1a0e"],["D:/blog/public/2018/11/09/mysql-mgr（双节点依次修改server-id)/index.html","f90c50a5c1e84521e26d2363caab15d1"],["D:/blog/public/2018/11/12/vsftpd配置ssl/index.html","334127c6e74f02971287c1febd285cc6"],["D:/blog/public/2018/11/12/查询vsftpd软件是否支持SSL/index.html","175596aa58103606532e21f1fcef109d"],["D:/blog/public/2018/11/14/mysql-show table status语法/index.html","ea1d715838f7c9e3e1f23632ed1ba93b"],["D:/blog/public/2018/11/22/DNS服务部署/index.html","8b0c159e75694a7e1bf2bdf812258b4c"],["D:/blog/public/2018/11/23/vsftp启用虚拟用户功能/index.html","f2d712457d3eb9bdd70a04d0549ec8ab"],["D:/blog/public/2018/11/25/GlusterFS/index.html","ce1fbdbcdb5659f5a2ff805602b16abe"],["D:/blog/public/2018/11/25/mysql-mgr模拟the master has purged binary logs containing GTIDs that the slave requires/index.html","91e425726e7ed6de54605e539828bd12"],["D:/blog/public/2018/11/27/optimize table运行是否支持online ddl/index.html","d7020619247a813c43d798a0cf1b15e7"],["D:/blog/public/2018/11/30/mysql-AUTO_INCREMENT参数详解/index.html","b6db0d484aa91b4b3e253a9fad4b252d"],["D:/blog/public/2018/12/17/centos7安装rac报错ohasd failed to start/index.html","e00bcda67a00667d07fb7a792875a7e1"],["D:/blog/public/2018/12/17/oracle udev配置/index.html","e519e679d7c83f61ab60cbfc92a1a1e7"],["D:/blog/public/2018/12/17/oracle安装rlwrap/index.html","4e5cf7f7d6357064efe3e820e452b4f6"],["D:/blog/public/2018/12/17/zabbix监控域名证书过期时间/index.html","cfc92e3f3336769145b63240346ba9b2"],["D:/blog/public/2018/12/21/remote_login_passwordfile&SQLNET.AUTHENTICATION_SERVICES参数/index.html","47c25f4de0e65426ef901e6a9f4ea9b6"],["D:/blog/public/2018/12/21/单实例rman备份异机恢复到rac环境/index.html","1651038c39865b4e8b9d7100dfd19a0b"],["D:/blog/public/2019/01/09/mysql大小写敏感参数/index.html","02afbec899a50b71ce718a6e9d7ccf1c"],["D:/blog/public/about/index.html","c9ab11ce363dc35253f08ed8cd41a820"],["D:/blog/public/archives/2018/07/index.html","479c5d3144108eaf0eeae2aaa38a8eb7"],["D:/blog/public/archives/2018/08/index.html","d588c06ca3a81d29ac69040128c024b1"],["D:/blog/public/archives/2018/08/page/2/index.html","598f7f0dffcf82246200f93423f17732"],["D:/blog/public/archives/2018/08/page/3/index.html","da198a1b4070e649a364560c576a496c"],["D:/blog/public/archives/2018/09/index.html","dbf02e85ee02b416c16434a59dfd14dc"],["D:/blog/public/archives/2018/09/page/2/index.html","166f930c210a155e9b34f76db224f90a"],["D:/blog/public/archives/2018/10/index.html","e0026a0e4a7dab5b44d06707ca38759f"],["D:/blog/public/archives/2018/10/page/2/index.html","8237cd3e276caaa4599130fa6740503c"],["D:/blog/public/archives/2018/11/index.html","65e20991b98fe6e5cf08032952ca9b4f"],["D:/blog/public/archives/2018/11/page/2/index.html","4890720825020fcf9fe7dc7a8dd267a0"],["D:/blog/public/archives/2018/12/index.html","66126e1655cb8311df090dda4d027e67"],["D:/blog/public/archives/2018/index.html","1f86ec94c83bbc10445209bf8f225b16"],["D:/blog/public/archives/2018/page/2/index.html","7bda35bcbb9a555503d859fb8e0bed46"],["D:/blog/public/archives/2018/page/3/index.html","ae953caa1248d93c4c17904d0c06dc90"],["D:/blog/public/archives/2018/page/4/index.html","ac8ba65a40ce2f83d89277084d16ed77"],["D:/blog/public/archives/2018/page/5/index.html","04170a687adcf32ba04a0a731b30c74d"],["D:/blog/public/archives/2018/page/6/index.html","52a7a023c75df26d059a25c17b3e574c"],["D:/blog/public/archives/2018/page/7/index.html","6a8f9cc36a3279c9f5c791fb282a86a3"],["D:/blog/public/archives/2018/page/8/index.html","c65ed2682a2542277232aa5fa2b42094"],["D:/blog/public/archives/2018/page/9/index.html","3248fafa74f900b8fcce57df6a1a3277"],["D:/blog/public/archives/2019/01/index.html","c92d5cda60bb03f054ac3cc88fc2662e"],["D:/blog/public/archives/2019/index.html","321084bf5674cfc9556ef4949e9ea253"],["D:/blog/public/archives/index.html","13ec81fa1f9e1d8eb5b3e9a863452756"],["D:/blog/public/archives/page/2/index.html","123fb922f425b33b4b93b84fdabe645a"],["D:/blog/public/archives/page/3/index.html","153ddeeacea16f78f552d8ac561d3328"],["D:/blog/public/archives/page/4/index.html","687036057b273e721ed5b0eac66bbc55"],["D:/blog/public/archives/page/5/index.html","72103b5676e5f5bfb59f3922784df709"],["D:/blog/public/archives/page/6/index.html","5b4bb4d6d246da51209c8029905f1aee"],["D:/blog/public/archives/page/7/index.html","fccfdbbb12e9250052f4900fed962a6c"],["D:/blog/public/archives/page/8/index.html","be1ed79abdb97c7d7fe7129c3c24f52c"],["D:/blog/public/archives/page/9/index.html","baf16ed17b81e9e6a6529051f8727ef9"],["D:/blog/public/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["D:/blog/public/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["D:/blog/public/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["D:/blog/public/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["D:/blog/public/css/components/article.css","83b78d1a532f9581d1c500c723cde3c3"],["D:/blog/public/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["D:/blog/public/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["D:/blog/public/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["D:/blog/public/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["D:/blog/public/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["D:/blog/public/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["D:/blog/public/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["D:/blog/public/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["D:/blog/public/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["D:/blog/public/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["D:/blog/public/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["D:/blog/public/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["D:/blog/public/css/style.css","9cafc3b93b1cc09438df3c81db038f3f"],["D:/blog/public/images/Iron-Man-3.jpg","930ea20e8a79754d2d866af1807a999a"],["D:/blog/public/images/icon-heart.svg","8c26ba607a7768cffd34afe72980fde0"],["D:/blog/public/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["D:/blog/public/images/top-active.png","02e0be375bd990075ae7984107e541de"],["D:/blog/public/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["D:/blog/public/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["D:/blog/public/img/404-bg.jpg","d73fa2c76c94b88fa8ce6d7ca992d255"],["D:/blog/public/img/header_img/Iron-Man-3.jpg","930ea20e8a79754d2d866af1807a999a"],["D:/blog/public/img/header_img/tf-logo-dark.png","155fc47f35726f9ebc2766c078071b22"],["D:/blog/public/img/icon_wechat.png","cd3a3c10a2a8033e2c203dda2c04e5f6"],["D:/blog/public/img/ironman-draw.png","0197bed6a9ec449e6e1125931de4d2b7"],["D:/blog/public/index.html","50943e551f63d44df561e452339f2257"],["D:/blog/public/js/index.js","3ca4511f9c0702aec39b9bfca39a5c3a"],["D:/blog/public/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["D:/blog/public/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["D:/blog/public/page/2/index.html","b8f1732eb3e11a66754cbf389be27360"],["D:/blog/public/page/3/index.html","200535b785dc7704e75d40bfc3d641b4"],["D:/blog/public/page/4/index.html","7cebc3ca2c24dd5f270ae603d4934737"],["D:/blog/public/page/5/index.html","d8680c0cc3d61c90b97c711dd2730fef"],["D:/blog/public/page/6/index.html","aa0992bb992c41314a48ab8db04cda2f"],["D:/blog/public/page/7/index.html","bff5f9c3f30b5e1f3c7b17b24674b17d"],["D:/blog/public/page/8/index.html","3c95e58e1ae75c908659c1d4528e2c51"],["D:/blog/public/page/9/index.html","d20266875cbb09198f83c12377fb096e"],["D:/blog/public/tags/cassandra/index.html","78826da77ba0787b791fa5c016446dbb"],["D:/blog/public/tags/grafana/index.html","4e7d60fed5cbe35c56f678ee2c7d0582"],["D:/blog/public/tags/index.html","62f12e49f018da80ce11cf80c64e2e1a"],["D:/blog/public/tags/linux/index.html","daae80cea82ee6862201ff615d78b541"],["D:/blog/public/tags/linux/page/2/index.html","9bb399d1c479a88079a743f67775f97f"],["D:/blog/public/tags/mongodb/index.html","82e1dd2b8e276fa380d06c5526d05bc5"],["D:/blog/public/tags/mysql/index.html","56fb27f1ccb520c35160b4fd116b3657"],["D:/blog/public/tags/mysql/page/2/index.html","bb15d4ee1d7f8aeed7d7fb2180eb732d"],["D:/blog/public/tags/mysql/page/3/index.html","54a27b52a11dd59aa793a372bdbdb1bf"],["D:/blog/public/tags/mysql/page/4/index.html","c275e408a49155544ac8f0a1b04d5bce"],["D:/blog/public/tags/mysql/page/5/index.html","18dccf8c4444d13104b7ecbeb57c3ac2"],["D:/blog/public/tags/mysql/page/6/index.html","dab6de8d8c46b104306694742e1b2078"],["D:/blog/public/tags/oracle/index.html","fe70f15e6dd97feefcac734d321e645a"],["D:/blog/public/tags/prometheus/index.html","c811bc300c1377e885120c73a5709892"],["D:/blog/public/tags/python/index.html","1813be11a25e1291961c3402d42aff56"],["D:/blog/public/tags/redis/index.html","db764cce437f6d34e80ec87d9735896a"],["D:/blog/public/tags/zabbix/index.html","8d708be229dbbc1d46dfa090b029cb67"],["D:/blog/public/tags/zabbix/page/2/index.html","eb91d5f2017111bce0d3a131a43b266f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







