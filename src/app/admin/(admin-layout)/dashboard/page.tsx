
import React from 'react'
import PageContainer from '../../_components/PageContainer'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { Flex, Progress } from 'antd';
import type { ProgressProps } from 'antd';
import { Divider } from 'antd';

function DashboardPage() {

  const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

  const conicColors: ProgressProps['strokeColor'] = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
  };
  return (
    <div>
      <PageContainer title='看板'>
        <h1>看板</h1>
        <div>
          <Row gutter={16}>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <Divider />
        <div>
          <Flex vertical gap="middle">
            <Progress percent={99.9} strokeColor={twoColors} />
            <Progress percent={50} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
            <Flex gap="small" wrap>
              <Progress type="circle" percent={90} strokeColor={twoColors} />
              <Progress type="circle" percent={100} strokeColor={twoColors} />
              <Progress type="circle" percent={93} strokeColor={conicColors} />
              <Progress type="circle" percent={90} strokeColor={twoColors} />
              <Progress type="circle" percent={100} strokeColor={twoColors} />
              <Progress type="circle" percent={93} strokeColor={conicColors} />
              <Progress type="circle" percent={100} strokeColor={twoColors} />
              <Progress type="circle" percent={93} strokeColor={conicColors} />
            </Flex>
            <Flex gap="small" wrap>
              <Progress type="dashboard" percent={90} strokeColor={twoColors} />
              <Progress type="dashboard" percent={100} strokeColor={twoColors} />
              <Progress type="dashboard" percent={93} strokeColor={conicColors} />
              <Progress type="dashboard" percent={90} strokeColor={twoColors} />
              <Progress type="dashboard" percent={100} strokeColor={twoColors} />
              <Progress type="dashboard" percent={93} strokeColor={conicColors} />
              <Progress type="dashboard" percent={100} strokeColor={twoColors} />
              <Progress type="dashboard" percent={93} strokeColor={conicColors} />
            </Flex>
          </Flex>
        </div>
      </PageContainer>

    </div>
  )



}

export default DashboardPage
