import React from "react";
import { red, green } from "@ant-design/colors";

import Sidebar from "../Layout/Sidebar";
import { Card, Layout, Col, Row, Progress } from "antd";
const { Header, Sider, Content } = Layout;

export default function UserDashboard() {
  return (
    <div>
      <Layout>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">분석중인 노트</h5>
                    <p class="card-text">
                      <p>
                        <Progress percent={50} steps={3} />
                        <br />
                        <Progress percent={30} steps={5} />
                        <br />
                        <Progress
                          percent={100}
                          steps={5}
                          size="small"
                          strokeColor={green[6]}
                        />
                        <br />
                        <Progress
                          percent={60}
                          steps={5}
                          strokeColor={[green[6], green[6], red[5]]}
                        />
                      </p>
                    </p>
                    <a href="#" class="btn btn-primary">
                      노트조회하러가기
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">최근내노트</h5>
                    <p class="card-text"> 2-3 패킷스위칭</p>
                    <p class="card-text"> 2-4 윈도우슬라이딩</p>
                    <p class="card-text"> 데이터베이스 설계JTBC </p>

                    <a href="#" class="btn btn-primary">
                      조회하기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
