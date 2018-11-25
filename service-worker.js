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

var precacheConfig = [["D:/blog/public/2018/07/30/python-2.7升级到python-3.7/index.html","57fd95a0665321b8a75e1e5629c6b70c"],["D:/blog/public/2018/08/01/redis-sentinel集群配置(一主两从三哨兵)/index.html","34dae7af672742b672b4d8a96d4ed426"],["D:/blog/public/2018/08/02/centos7.4yum安装gcc报错/index.html","3f85567417a58d463a74ab2d75662bbe"],["D:/blog/public/2018/08/02/redis-cluster集群部署/index.html","123d18fa9f723a4d95b89f27401a9873"],["D:/blog/public/2018/08/03/mongdob4.0/index.html","53648fb3c8cba50f0ba7bd7fae4015a1"],["D:/blog/public/2018/08/03/zabbix-nginx/index.html","1aaf67c797f3c639adfed8b999bea45e"],["D:/blog/public/2018/08/05/mongodb-集群/index.html","9336550974d3199d7885d2e72f455813"],["D:/blog/public/2018/08/07/5.7.22-log版本mysql,mha主从环境，从库报错信息/index.html","eed6268ecf0c173181c2e93c4ab926f1"],["D:/blog/public/2018/08/08/mongodb-sharding-cluster部署/index.html","38f8cb75b85979bbb3560b69d82a93f4"],["D:/blog/public/2018/08/09/mysqldump逻辑备份及恢复/index.html","17a1cdfb6563c60ddaebdc63099f4700"],["D:/blog/public/2018/08/10/mysql定时备份及邮件告知备份情况/index.html","f496296b3fc9a5605ed5d5c242c6e94c"],["D:/blog/public/2018/08/11/mysql- Lock wait timeout exceeded; try restarting transaction/index.html","e4553d34213e59a99bd704f9ff80c296"],["D:/blog/public/2018/08/11/使用innodb trx和innodb lock信息表查看锁事物/index.html","9b2d676defd22d2d4f806f1e3b9494e0"],["D:/blog/public/2018/08/12/mongdob4.0 备份与恢复/index.html","4b88bd1800cd3b697f046619cfccd9ab"],["D:/blog/public/2018/08/12/mongodb4.0定时备份并邮件告知备份情况/index.html","e0eed9ce8d30fd03ffc24b446d93ec27"],["D:/blog/public/2018/08/14/mysql-innodb buffer pool size调整/index.html","f63968cfe4af4a6c8d035138e9df6115"],["D:/blog/public/2018/08/14/zabbix监控mysql/index.html","3e849fe191e576ca165c3e637c234a88"],["D:/blog/public/2018/08/14/去掉查询结果中带的mysql [Warning] Using a password on the command line interface can be insecure/index.html","deb1059f50c0d93630eadaa2b1814fed"],["D:/blog/public/2018/08/15/zabbix监控mongodb/index.html","ebcb97c051094e3c78fdf33739bad645"],["D:/blog/public/2018/08/17/mysql lock table && unlock tables实验/index.html","a3d3ba4c261a9c12c98356e6ff3bc12b"],["D:/blog/public/2018/08/17/samba配置/index.html","60bf2cf26162c917b0982a756a3cb3e3"],["D:/blog/public/2018/08/17/zabbix监控redis/index.html","ab596887082bcdbc2bafc493286f9c89"],["D:/blog/public/2018/08/20/mysql-mgr集群节点主节点与两个从节点网络异常，造成的集群异常问题/index.html","ed1939d3bc2baaf3f73cf5289f8a8c4b"],["D:/blog/public/2018/08/21/InnoDB-page_cleaner-1000ms intended loop took xxxms/index.html","b68ddf76886e64c7c882a9055f2c5073"],["D:/blog/public/2018/08/23/centos7.2服务器使用df -h卡死问题/index.html","2f1b70762660d148b08453a0d9e7f5bd"],["D:/blog/public/2018/08/27/zabbix-agent批量安装/index.html","755a452d88e2ea6926fff4fef5f3968f"],["D:/blog/public/2018/08/27/zabbix-server安装配置/index.html","c7f140b2ac953a037ccefb8fdb92fdd9"],["D:/blog/public/2018/08/27/zabbix监控cassandra数据库/index.html","a162dc38d0724fd21f426a534c1a4687"],["D:/blog/public/2018/08/27/zabbix监控磁盘io总吞吐量/index.html","e43d7c6fff94a81c254b19a3bb291f1e"],["D:/blog/public/2018/08/28/解决zabbix中文乱码/index.html","f978d9013c3a7f0c2b5cab6ddc702638"],["D:/blog/public/2018/08/29/grafana+prometheus安装配置监控mysql、redis、mongodb/index.html","6e5b9376209dea3fb26d3706d7166739"],["D:/blog/public/2018/09/04/mysql blackhole-engine/index.html","db00b5338bcf42afa02196efe30eedb8"],["D:/blog/public/2018/09/04/使用mysqladmin查看innodb_buffer_pool缓存命中率及缓存使用情况/index.html","17086cc00e66c0de5069c7bbea74faaa"],["D:/blog/public/2018/09/05/mysql前缀索引/index.html","878a35f04f5ac6db006c813366978dfe"],["D:/blog/public/2018/09/05/mysql唯一性索引/index.html","4f4c66051fc72b097a5ac30f568843e3"],["D:/blog/public/2018/09/06/mysql binary排序规则与_bin排序规则对比/index.html","7a361805280319a28ecdec89d38ad6f5"],["D:/blog/public/2018/09/07/云交易所建库、修改多个表的语句/index.html","32f308da391f8dfbe8102b8231989c30"],["D:/blog/public/2018/09/08/mysql报错-[ERROR] InnoDB-Unable to lock -ibdata1/index.html","ced5c3f92d7fe4b31e12f1c8f641b2b3"],["D:/blog/public/2018/09/09/mysql show processlist详解/index.html","59aed4202a9705d8dd8230cfa0bb201c"],["D:/blog/public/2018/09/09/mysql update一条语句过程遇到的问题/index.html","768ad778e47f9d9dd71a0042bae8b504"],["D:/blog/public/2018/09/10/mysql innodb_locks参数详解/index.html","d6108d0437bdf84dcb82673d33ec6880"],["D:/blog/public/2018/09/10/mysql innodb_trx参数详解/index.html","6dcffae3535bd2ec8cfe68eae3a1d2c5"],["D:/blog/public/2018/09/10/mysql-Lock wait timeout exceeded; try restarting transaction/index.html","e497ba2cb7554e2bd873d556a0e2f9cc"],["D:/blog/public/2018/09/11/mysql limit参数详解及使用过程遇到的问题/index.html","409cbf93c36f85542864bba393885cb5"],["D:/blog/public/2018/09/12/mysql 切割慢日志另附定期切割日志脚本/index.html","9fb8aeaabb152dae265fd2a9ea0a50d8"],["D:/blog/public/2018/09/12/mysqldumpslow参数详解/index.html","d795b239caa058fd90da25d9d010f1fb"],["D:/blog/public/2018/09/13/Multi-threaded slave statistics for channel 'group_replication_applier'/index.html","60dc104273b163b402bdd6918da6872c"],["D:/blog/public/2018/09/14/cassandra安装部署/index.html","6f757d17a86ef3cc5de9e95ce6575d3c"],["D:/blog/public/2018/09/14/mysql mgr从节点down恢复过程遇到的问题/index.html","fc0c63b18fbcf6aa2dc73a3e3574930f"],["D:/blog/public/2018/09/26/mysql 勿操作drop table之后，利用mysqldump备份和binlog去恢复/index.html","9fc7c4bc051d07418c0c8df2f645237a"],["D:/blog/public/2018/09/28/使用certbot为域名生成免费证书(apache版)/index.html","2937fd0cbace582414dc0108674e2c1a"],["D:/blog/public/2018/10/08/使用mysqldiff和mysqldbcompare比较数据库差异/index.html","a7a4150235df48082bbbe3ce1311f367"],["D:/blog/public/2018/10/17/mysql--The table is probably corrupted/index.html","128429c7c34a8e6057c18e8c9ade1692"],["D:/blog/public/2018/10/18/linux区分当前服务器是物理机还是虚拟机/index.html","5ea949a6ad32ae128c373b5d8475c78d"],["D:/blog/public/2018/10/18/mysql忘记root密码，修改密码方法/index.html","9edfb122f4a4c74b5c0af309a62ebcce"],["D:/blog/public/2018/10/22/oracle 定期删除trace文件/index.html","bcd625b12a51251ac4f19fcfe2df0b47"],["D:/blog/public/2018/10/22/oracle-audit_file_dest和audit_trail参数详解/index.html","2b3c6e33cc3177acc959e987eac03275"],["D:/blog/public/2018/10/24/hp交换机启用snmp，并添加到zabbix监控/index.html","42201bca62c85b983914775b2db4d301"],["D:/blog/public/2018/10/25/mysql-MGR集群配置/index.html","0dd4cebbe8d4322ebdfa572adfb4b8b7"],["D:/blog/public/2018/10/25/mysql数据库使用innobackupex和mysqldump备份恢复的对比/index.html","3972cf886328f03406579a3559b0e423"],["D:/blog/public/2018/10/25/一台服务器安装多个mysql数据库程序/index.html","29d6779d80705cc4dc1d9ed3acb09800"],["D:/blog/public/2018/10/25/安装mysqlclient客户端/index.html","19efbbfeff67b2cfe979ab6f200fc6e7"],["D:/blog/public/2018/10/27/安装mysqlclient客户端/index.html","d08c64db80b8dd3d2584367e6d939cbb"],["D:/blog/public/2018/10/28/Old incarnation found while trying to add node/index.html","16189f141eaed25aee2938326e9943b9"],["D:/blog/public/2018/10/30/测试mysql or和in对sql查询效率的影响/index.html","545a358f2031b5656dabdce6aca91246"],["D:/blog/public/2018/10/30/测试mysql where条件顺序对sql查询效率的影响/index.html","91df314de10150e0fb06dbe08f673465"],["D:/blog/public/2018/10/31/nginx https证书配置/index.html","8deecccab7fe54972b315e1e4403d168"],["D:/blog/public/2018/10/31/oracle 静默安装/index.html","fbc8bc7b8b9d48261ae75c499b5c5564"],["D:/blog/public/2018/11/01/mysql-Can't start group replication on secondary member with single primary-mode while asynchronous replication channels are running/index.html","cbe135fe9f69c44f777a4cad325d2a8b"],["D:/blog/public/2018/11/01/mysql使用备份的.frm文件恢复表结构/index.html","165755245fb0bbfbff6f8027a5d711f7"],["D:/blog/public/2018/11/06/centos安装vsftp/index.html","e29682a5aa695d57b4bbd46855a549e5"],["D:/blog/public/2018/11/06/mysql意外drop表之后，使用innobackupex恢复/index.html","d2177888e31af51eec5e026fcebb5e90"],["D:/blog/public/2018/11/07/oracle本地表空间在uniform、system等不同模式下分配extent方式/index.html","3e0a50464298fc096c02767ac8df6751"],["D:/blog/public/2018/11/09/mysql-mgr单主模式切换为多主/index.html","5341cff4218f06d89e821361cf9222b5"],["D:/blog/public/2018/11/09/mysql-mgr解散集群并重新添加/index.html","db2274d6d58c53e080073c87d8e34c2d"],["D:/blog/public/2018/11/09/mysql-mgr（双节点依次修改server-id)/index.html","27e42dcacc330fa88903a9467a2db136"],["D:/blog/public/2018/11/12/vsftpd配置ssl/index.html","cbde9d1a50bdf7d174c3473b59f6e33f"],["D:/blog/public/2018/11/12/查询vsftpd软件是否支持SSL/index.html","175596aa58103606532e21f1fcef109d"],["D:/blog/public/2018/11/14/mysql-show table status语法/index.html","d33cac67ea8f344cdb5a46808bd94c0b"],["D:/blog/public/2018/11/22/DNS服务部署/index.html","ecb23b6d379c5859edb017d42243fb5d"],["D:/blog/public/2018/11/23/vsftp启用虚拟用户功能/index.html","1b9fb0b047dc033ef97f67a11f5417d4"],["D:/blog/public/2018/11/25/GlusterFS/index.html","9a5900a6a0b83ba2c19056323531c596"],["D:/blog/public/2018/11/25/mysql-mgr模拟the master has purged binary logs containing GTIDs that the slave requires/index.html","36e00519de20238b8f74ab22fac5a5ab"],["D:/blog/public/about/index.html","06dfe71082bb046f14c3690051e80b38"],["D:/blog/public/archives/2018/07/index.html","16eac898bac040c4c6ef646dd2a12aa9"],["D:/blog/public/archives/2018/08/index.html","9121656c4ef8725ca4ec883484ff212a"],["D:/blog/public/archives/2018/08/page/2/index.html","a41ef22ab5fef258113ea6522da813a0"],["D:/blog/public/archives/2018/08/page/3/index.html","a1ea9904ea91102ed8b45c30ae58aab8"],["D:/blog/public/archives/2018/09/index.html","0a86ea879b504defa8d16de45a42c959"],["D:/blog/public/archives/2018/09/page/2/index.html","35ce6e297b0bfd7387305b0981169b66"],["D:/blog/public/archives/2018/10/index.html","6e26b174d5e8340a4f0c25f5ee0b977c"],["D:/blog/public/archives/2018/10/page/2/index.html","66ead5a49b149aee952ef3379e2570f3"],["D:/blog/public/archives/2018/11/index.html","8d67fc187a1b980d88e4cbdfa007a785"],["D:/blog/public/archives/2018/11/page/2/index.html","8ef0e3f2b22ead3f2cd997901f2d7357"],["D:/blog/public/archives/2018/index.html","bffe710061e1ce3b826ffae66ca1db2a"],["D:/blog/public/archives/2018/page/2/index.html","8034b819827a3478fb5f4b7eff47b927"],["D:/blog/public/archives/2018/page/3/index.html","8da200252603ad703bd0b4aea084ae76"],["D:/blog/public/archives/2018/page/4/index.html","97fc66322cfc26a522a889392a426d91"],["D:/blog/public/archives/2018/page/5/index.html","18664bf945574809abf0531974c76f0f"],["D:/blog/public/archives/2018/page/6/index.html","6ec27748b911e59e3b1358e462e423dd"],["D:/blog/public/archives/2018/page/7/index.html","ced13c5d33600b1dbcc3b2b15b2ccdff"],["D:/blog/public/archives/2018/page/8/index.html","a531e602518edf7efcce8f7ab08a715c"],["D:/blog/public/archives/2018/page/9/index.html","4b52ed5f137463bbd0d3f7dc112039e7"],["D:/blog/public/archives/index.html","053870d1c0a7fbab67dbec00fd30a9d7"],["D:/blog/public/archives/page/2/index.html","d04838146a2405e2fa4aaa549a70921d"],["D:/blog/public/archives/page/3/index.html","05f5ab402efb01426205c4ba5be205e8"],["D:/blog/public/archives/page/4/index.html","e2831a808e4b8aa444fff04bafa58676"],["D:/blog/public/archives/page/5/index.html","4f5c1e570dbe571d4dc677775d7adb41"],["D:/blog/public/archives/page/6/index.html","d165f02b07426c61269525b86c7cbb2e"],["D:/blog/public/archives/page/7/index.html","8f400079860c10e69c3f81a849b272b6"],["D:/blog/public/archives/page/8/index.html","f29f1d0cd168d7a21596cd541f28927b"],["D:/blog/public/archives/page/9/index.html","cadf881dc970c5ac278ed7e290e1f144"],["D:/blog/public/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["D:/blog/public/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["D:/blog/public/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["D:/blog/public/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["D:/blog/public/css/components/article.css","83b78d1a532f9581d1c500c723cde3c3"],["D:/blog/public/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["D:/blog/public/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["D:/blog/public/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["D:/blog/public/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["D:/blog/public/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["D:/blog/public/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["D:/blog/public/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["D:/blog/public/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["D:/blog/public/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["D:/blog/public/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["D:/blog/public/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["D:/blog/public/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["D:/blog/public/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["D:/blog/public/css/style.css","9cafc3b93b1cc09438df3c81db038f3f"],["D:/blog/public/images/Iron-Man-3.jpg","930ea20e8a79754d2d866af1807a999a"],["D:/blog/public/images/icon-heart.svg","8c26ba607a7768cffd34afe72980fde0"],["D:/blog/public/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["D:/blog/public/images/top-active.png","02e0be375bd990075ae7984107e541de"],["D:/blog/public/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["D:/blog/public/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["D:/blog/public/img/404-bg.jpg","d73fa2c76c94b88fa8ce6d7ca992d255"],["D:/blog/public/img/header_img/Iron-Man-3.jpg","930ea20e8a79754d2d866af1807a999a"],["D:/blog/public/img/header_img/tf-logo-dark.png","155fc47f35726f9ebc2766c078071b22"],["D:/blog/public/img/icon_wechat.png","cd3a3c10a2a8033e2c203dda2c04e5f6"],["D:/blog/public/img/ironman-draw.png","0197bed6a9ec449e6e1125931de4d2b7"],["D:/blog/public/index.html","d1c54c68bf5c426e924649a3a3202a98"],["D:/blog/public/js/index.js","3ca4511f9c0702aec39b9bfca39a5c3a"],["D:/blog/public/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["D:/blog/public/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["D:/blog/public/page/2/index.html","207788cc0dab7c8f48c3f8db79cd20d4"],["D:/blog/public/page/3/index.html","7078f5fa852eef9fae7e57a34a539f4d"],["D:/blog/public/page/4/index.html","e9a86d0922b7d8154f94295c87a57cb4"],["D:/blog/public/page/5/index.html","213290c97c449430e01d6cecc9870ccd"],["D:/blog/public/page/6/index.html","ab459fd975f42f140782709cac7cc919"],["D:/blog/public/page/7/index.html","99efbe76b79e0b5bc4b088a0c5050a8a"],["D:/blog/public/page/8/index.html","cac3598bf3fef7b1871117ccb36023e7"],["D:/blog/public/page/9/index.html","9ecac782a8531170c90c06bcd6fe4ed0"],["D:/blog/public/tags/cassandra/index.html","fe16a941fb34d49809548ec7558d0b0e"],["D:/blog/public/tags/grafana/index.html","750a9a2fc66fe952cddc65ab180f455c"],["D:/blog/public/tags/index.html","332b907a6e9af42735821913cd9fe3ab"],["D:/blog/public/tags/linux/index.html","c35a55d0d5067769c1feee97a1b340e5"],["D:/blog/public/tags/linux/page/2/index.html","c8e74d2565687c0745cbc2cdcb2a933c"],["D:/blog/public/tags/mongodb/index.html","1794ca44f8626c962500244123b14b7b"],["D:/blog/public/tags/mysql/index.html","9537ca355dfcd31aafeb247a181e407a"],["D:/blog/public/tags/mysql/page/2/index.html","fd438c0f5375d15ea422a1edc4ab07bd"],["D:/blog/public/tags/mysql/page/3/index.html","a6f18f3b7c5307f0f8f9fbdf0fd8069f"],["D:/blog/public/tags/mysql/page/4/index.html","7d4e46750722570a02a0d681d74ae287"],["D:/blog/public/tags/mysql/page/5/index.html","410551887d71ff3285c369c3b62452ef"],["D:/blog/public/tags/oracle/index.html","d5864c110332832eb637e8ad23953f3f"],["D:/blog/public/tags/prometheus/index.html","01b860f98bad94f6d0a3daf8f6c35fdc"],["D:/blog/public/tags/python/index.html","e2b77155cf55994c551a57662a224040"],["D:/blog/public/tags/redis/index.html","0f5b90083a30752c7a2ebc362fd3bf2d"],["D:/blog/public/tags/zabbix/index.html","0fb3f30f315a9126c9aa3bbb9cb9fd4c"]];
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







