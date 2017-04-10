/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : fruit garden

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:51:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `uid` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `car` varchar(255) NOT NULL,
  `detailsrc1` varchar(255) DEFAULT NULL,
  `detailsrc2` varchar(255) DEFAULT NULL,
  `detailsrc3` varchar(255) DEFAULT NULL,
  `detailsrc4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '越南青皮香芒果', '../img/details/species1.jpg', '￥59.90', ' 3个', '../img/head/icons.png', '1-1-2.jpg', '1-1-2.jpg', '1-4-1.jpg', '');
INSERT INTO `list` VALUES ('2', '美国华盛顿红地厘蛇果', '../img/details/species2.jpg', '￥128.00', '20个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('3', '沁甜脆瓜', '../img/details/species37.jpg', '￥68.00', '1个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('4', '荷兰青啤梨', '../img/details/species38.jpg', '￥39.90', '4个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('5', 'Driscoll\'s霜衣蓝莓', '../img/details/species5.jpg', '￥99.00', '3盒', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('6', '越南火龙果', '../img/details/species6.jpg', '￥49.90', '5斤', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('7', '马来西亚冷冻榴莲金凤D198', '../img/details/species34.jpg', '￥338.00', '400g', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('8', '新奇士美国脐橙', '../img/details/species36.jpg', '￥68.00', '12个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('9', '进口香蕉', '../img/details/species13.jpg', '￥29.00', '2斤', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('10', '泰国山竹', '../img/details/species14.jpg', '￥78.00', '2斤', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('11', '泰国椰皇', '../img/details/species17.jpg', '￥29.90', '2个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('12', '新奇士美国柠檬', '../img/details/species10.jpg', '￥39.90', '4个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('13', '巨无霸-佳沛新西兰阳光金奇异果', '../img/details/species7.jpg', '￥69.90', '6个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('14', '关怀备至礼盒', '../img/details/species18.jpg', '￥198.00', '1盒', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('15', '惠心礼盒', '../img/details/species24.jpg', '￥88.00', '1盒', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('16', '爱的回报礼盒', '../img/details/species20.jpg', '￥188.00', '1盒', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('17', '智慧baby套餐', '../img/details/species19.jpg', '￥68.00', '1盒', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('18', '欢乐时光水礼篮提货券', '../img/details/species32.jpg', '￥238.00', '1张', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('19', '海南白雪蜜瓜', '../img/details/species33.jpg', '￥108.00', '2个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('20', '天天果园两百充值卡', '../img/details/species21.jpg', '￥200.00', '1张', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('21', '天天果园五百充值卡', '../img/details/species23.jpg', '￥500.00', '1张', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('22', '天天果园一千充值卡', '../img/details/species22.jpg', '￥1000.00', '1张', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('23', '天天果园-方形牛油果抱枕\r\n', '../img/details/species26.jpg', '￥59.00', '1个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('24', '天天果园-U型枕', '../img/details/species27.jpg', '￥49.00', '1个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('25', '鹿小天双层隔热杯', '../img/details/species25.jpg', '￥59.00', '1个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('26', '火山番茄(混色)', '../img/details/species31.jpg', '￥39.00', '380g', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('27', '鹿小天玩偶', '../img/details/species28.jpg', '￥60.00', '1个', '../img/head/icons.png', '', '', '', '');
INSERT INTO `list` VALUES ('28', 'Driscoll\'s霜衣蓝莓', '../img/details/species5.jpg', '￥388.00', '3盒', '../img/head/icons.png', null, null, null, null);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1', '1', null);
INSERT INTO `users` VALUES ('2', '131999999999', '131999999999', null);
INSERT INTO `users` VALUES ('3', '13145677', '13224354', null);
INSERT INTO `users` VALUES ('4', '13767002741', '12345678', null);
INSERT INTO `users` VALUES ('5', '17688862630', '1qazxsw2', null);
INSERT INTO `users` VALUES ('6', '13767002741', '13767002741', null);
INSERT INTO `users` VALUES ('7', '13762222222', '1111111', null);
INSERT INTO `users` VALUES ('8', '13366776643', '123edcxsw', null);
SET FOREIGN_KEY_CHECKS=1;
