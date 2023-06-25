import { FileOutlined, PieChartOutlined, UserOutlined,DesktopOutlined,TeamOutlined,MenuUnfoldOutlined,HomeOutlined,ReloadOutlined,AudioOutlined,MoreOutlined,DownOutlined,BulbTwoTone,UploadOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Col, Row, Image,Avatar, Space,Input,Button, Dropdown,Tooltip, message,Card,Calendar, QRCode, AutoComplete,Carousel,Progress, Upload} from 'antd';
import type { MenuProps } from 'antd';
import { useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Chart, Line, Point } from 'bizcharts';
import Icon from '@ant-design/icons';

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
  </svg>
);
const PandaIcon = (props) => <Icon component={PandaSvg} {...props} />;
const fileList = [
  {
    uid: '0',
    name: '回收箱.png',
    status: 'uploading',
    percent: 33,
  },
  {
    uid: '-1',
    name: '杯子.png',
    status: 'done',
    url: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.oiP4pb-ObrYr-G6rw1kWmQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
    thumbUrl: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.oiP4pb-ObrYr-G6rw1kWmQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
  },
  {
    uid: '-2',
    name: '货车.png',
    status: 'error',
  },
];

// 数据源
const data = [
  { month: "2023-01-01", acc: 84.0 },
  { month: "2023-02-01", acc: 14.9 },
  { month: "2023-03-01", acc: 17.0 },
  { month: "2023-04-01", acc: 20.2 },
  { month: "2023-05-01", acc: 55.6 },
  { month: "2023-06-01", acc: 56.7 },
  { month: "2023-07-01", acc: 30.6 },
  { month: "2023-08-01", acc: 63.2 },
  { month: "2023-09-01", acc: 24.6 },
  { month: "2023-10-01", acc: 14.0 },
  { month: "2023-11-01", acc: 9.4 },
  { month: "2023-12-01", acc: 7.3 }
];
const contentStyle = {
  height: '220px',
  color: '#fff',
  lineHeight: '220px',
  textAlign: 'center',
  //background: '#364d79',
};
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


//侧边栏信息内容
const onSearch = (value: string) => console.log(value);
const items1 = [
  getItem('系统设置', '1', <PieChartOutlined />,[
	  getItem('用户账号管理', '3'),
	  getItem('角色管理', '4'),
  ]),
  getItem('商家管理', '2', <DesktopOutlined />, [
	getItem('商家账户管理', '6'),
	getItem('商家提现管理', '8')
  ]),
  getItem('订单管理', 'sub1', <UserOutlined />, [
    getItem('用户订单预约管理', '3'),
    getItem('商家收货订单管理', '4'),
    getItem('司机取货订单管理', '5'),
  ]),
  getItem('数据统计管理', 'sub2', <TeamOutlined />, [
	getItem('商家数据管理', '6'), 
	getItem('库存管理', '8')
  ]),
  getItem('员工管理', '2', <DesktopOutlined />),
  getItem('骑手管理', '1', <PieChartOutlined />),
];
const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
							
							//账户切换设计
const items = [
  {
    label: '刘湘勤1号',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '刘湘勤2号',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '刘湘勤3号',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '刘湘勤4号',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const App = () => {
  const { token } = theme.useToken();
   const wrapperStyle = {
     width: 300,
     border: `1px solid ${token.colorBorderSecondary}`,
     borderRadius: token.borderRadiusLG,
   };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (								
										// 顶部导航栏设计+侧边栏样式+内容设计
    <Layout>
      <Header style={{alignItems: 'center',backgroundColor:'#336699'}}>
        <Row>
            <Col xl={8} xs={24} push={0}>
			  <div style={{marginLeft:"-43px"}}>
              <Space wrap>
                  <Avatar
                    style={{
                      backgroundColor: '#fdeab8',
                      color: '#55aa00',
              		  fontSize:100,
					  fontWeight:"900",
                    }}
					size={{sm: 35, md: 40, lg: 55 }}
                  >
                    e+
                  </Avatar>
              	<span style={{color:'#FFFFFF',fontSize:30,fontFamily:"隶书"}}>再生资源回收门店管理系统</span>
              </Space>
			  </div>
            </Col>
            <Col xl={3} xs={24} pull={0}>
			  <div style={{margin:"3px",float:"left"}}><MenuUnfoldOutlined style={{color:'#FFFFFF',fontSize:20}} /></div>
			  <div style={{margin:"3px 35px",float:"left"}}><HomeOutlined  style={{color:'#FFFFFF',fontSize:20}} /></div>
			  <div style={{margin:"3px",float:"left"}}><ReloadOutlined style={{color:'#FFFFFF',fontSize:19}} /></div>
            </Col>
			<Col xl={6} xs={24} pull={0}>
			  <div style={{margin:"18px 20px",float:"right"}}><Search placeholder="请输入搜索内容..." onSearch={onSearch} enterButton /></div>
			</Col>
			<Col xl={6} xs={0} pull={0}>
			  <div style={{margin:"4px 60px",float:"left"}}><BulbTwoTone style={{color:'#FFFFFF',fontSize:25}} /></div>
			  <div style={{margin:"3px -40px",float:"right"}}>
				<Space wrap>
				<Dropdown.Button menu={menuProps} placement="bottom"  icon={<PandaIcon
      style={{
        fontSize: '22px',
      }}
    />}>
					<span style={{color:'#a6a6a6',fontSize:14}}>尊敬的刘湘勤用户,欢迎您</span>
				</Dropdown.Button>
			  </Space>
				<div style={{margin:"3px -35px",float:"right"}}><MoreOutlined style={{color:'#FFFFFF',fontSize:20}} /></div>
			  </div>
			</Col>
          </Row>
        
      </Header>
	  
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{backgroundColor:'#99CCFF'}}>
                <div className="demo-logo-vertical" />
                <Menu style={{backgroundColor:'#99CCFF'}} defaultSelectedKeys={['1']} mode="inline" items={items1} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px',backgroundColor:'#CCCCCC'}}>
          <Breadcrumb style={{ margin: '5px 0' }}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>列表</Breadcrumb.Item>
            <Breadcrumb.Item>应用</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 550,
              background: colorBgContainer,
            }}
          >
             <Row gutter={16}>
                 <Col xl={9} xs={24}>
                   <Card title="日历" bordered={false} style={{textAlign:"center"}}>
                    <div style={wrapperStyle}>
						<Calendar fullscreen={false} onPanelChange={onPanelChange} style={{margin:"auto"}}/>
					</div>
                   </Card>
                 </Col>
                 <Col xl={9} xs={24}>
                   <Card title="走马灯" bordered={false} style={{textAlign:"center"}}>
                     <Carousel autoplay>
                         <div>
                           <h3 style={contentStyle}><Image width="100%" src="https://tse2-mm.cn.bing.net/th/id/OIP-C.pllqPeARP0s5mU2jSlaPcQHaFe?w=260&h=193&c=7&r=0&o=5&dpr=2&pid=1.7"></Image></h3>
                         </div>
                         <div>
                           <h3 style={contentStyle}><Image width="100%" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.WKFnyTy5EDN1VYDGkjDc5gHaFJ?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"></Image></h3>
                         </div>
                         <div>
                           <h3 style={contentStyle}><Image width="100%" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.CVVHLEafhCsZ3POVhIfu6wAAAA?w=268&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"></Image></h3>
                         </div>
                         <div>
                           <h3 style={contentStyle}><Image width="100%" src="https://tse2-mm.cn.bing.net/th/id/OIP-C.OtUyFy4XMzg5N1fQUtbbrAHaGB?w=225&h=183&c=7&r=0&o=5&dpr=2&pid=1.7"></Image></h3>
                         </div>
                       </Carousel>
                   </Card>
                 </Col>
                 <Col xl={6} xs={24}>
                   <Card title="二维码" bordered={false} style={{textAlign:"center"}}>
                     <div id="myqrcode">
                         <QRCode
                           value="https://ant.design/"
                           style={{
                            marginBottom: 16,
							margin:"auto",
                           }}
                         />
                         <Button type="primary" onClick={downloadQRCode}>
                           下载客户端
                         </Button>
                       </div>
                   </Card>
                 </Col>
               </Row>  
			   
			   <Row gutter={16}>
			       <Col xl={12} xs={24}>
			         <Card title="彩色折线图" bordered={false} style={{textAlign:"center"}}>
			           <Chart scale={{value: {min: 0}}} padding={[10,20,50,40]} autoFit height={500} data={data} >
			               <Line
			                 shape="smooth"
			                 position="month*acc"
			                 color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
			               />
			             </Chart>
			         </Card>
			       </Col>
			       <Col xl={6} xs={24}>
			         <Card title="文件上传" bordered={false} style={{textAlign:"center"}}>
			           <Upload
			                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
			                 listType="picture"
			                 defaultFileList={[...fileList]}
			               >
			                 <Button icon={<UploadOutlined />}>上传</Button>
			               </Upload>
			         </Card>
			       </Col>
			       <Col xl={6} xs={24}>
			         <Card title="进度条" bordered={false} style={{textAlign:"center"}}>
			           <div
			               style={{
			                 width: 170,
							 margin:"auto",
			               }}
			             >
			               <Progress percent={30} size="small" />
			               <Progress percent={50} size="small" status="active" />
			               <Progress percent={70} size="small" status="exception" />
			               <Progress percent={100} size="small" />
			             </div>
			         </Card>
			       </Col>
			     </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
