function FindProxyForURL(url, host)
{
    // variable strings to return
    var proxy_yes = "PROXY myproxy.com:9502";
    var proxy_no = "DIRECT";

    if (shExpMatch(host, "localhost*")) return proxy_no;
    if (shExpMatch(host, "127.0.0.1*")) return proxy_no;

    if (shExpMatch(host, "blockhub.gg*")) return proxy_yes;

    return proxy_yes;
}