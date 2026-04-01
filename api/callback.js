// 企业微信 URL 验证专用（仅处理 GET 请求）
export default {
  async fetch(request) {
    const url = new URL(request.url);
    // 获取企业微信传来的验证参数
    const msg_signature = url.searchParams.get('msg_signature');
    const timestamp = url.searchParams.get('timestamp');
    const nonce = url.searchParams.get('nonce');
    const echostr = url.searchParams.get('echostr');

    // 直接返回 echostr（纯文本，企业微信验证核心）
    return new Response(echostr, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};
