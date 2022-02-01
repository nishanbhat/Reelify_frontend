import React from 'react';
import { List, Avatar, Typography } from 'antd';

function DetailVideoPage() {
  return (
  <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
  <video style={{ width: '100%' }} src controls></video>

  <List.Item
      actions={[]}
  >
      <List.Item.Meta
          avatar={<Avatar src />}
          title={<a href="https://ant.design">user name</a>}
          description
      />
      <div></div>
  </List.Item>

</div>
  )

}

export default DetailVideoPage;

