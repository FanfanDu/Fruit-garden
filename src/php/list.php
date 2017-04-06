<?php 
	class Goods{
        public $goodsId;
        public $goodsName;
        public $goodsPrice;
        public $goodsImg;
        public $goodNumber;
    };
    $con = new mysqli('127.0.0.1','root','','fruit garden');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from list';
    $res = $con->query($sql);
    $arr = array();//装商品信息的数组
    if(!$con->connect_error){
         if($res->num_rows > 0){
                while($row = $res->fetch_assoc()){
                    $goods = new Goods();
                    $goods->goodsId = $row["uid"];
                    $goods->goodsName = $row["name"];
                    $goods->goodsPrice = $row["price"];
                    $goods->goodsImg = $row["src"];
                   	$goods->goodNumber = $row["number"];
                    array_push($arr, $goods);
                }

                //返回json字符串  
            }else {
                array_push($arr, "没有商品");
            }
    }else{
        array_push($arr, "连接数据库失败");
    };
	 if(isset($_REQUEST['callback'])){
	        // 表示是一个jsonp的请求
	        //找到callback 的函数名称
	        $callback = $_REQUEST['callback'];
	        //调用callback的函数
	        $str = json_encode($arr);
	        print_r($callback."('$str')");
	    }else{
	    	print_r(222);
	        array_push($arr, "连接数据库失败");
	        $str = json_encode($arr);
	        print_r( $str );
	    }
?>