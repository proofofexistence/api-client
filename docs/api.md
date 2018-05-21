## Constants

<dl>
<dt><a href="#client">client</a></dt>
<dd><p>Create an Axios Client with defaults</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#request">request()</a> ⇒ <code>Promise</code></dt>
<dd><p>Custom</p>
</dd>
<dt><a href="#getConfig">getConfig()</a> ⇒ <code>Promise.&lt;object&gt;</code></dt>
<dd><p>Get current config</p>
</dd>
<dt><a href="#getLatestConfirmed">getLatestConfirmed()</a> ⇒ <code><a href="#Registration">Promise.Array.&lt;Registration&gt;</a></code></dt>
<dd><p>Get all confirmed transactions</p>
</dd>
<dt><a href="#getLatestUnconfirmed">getLatestUnconfirmed()</a> ⇒ <code><a href="#Registration">Promise.Array.&lt;Registration&gt;</a></code></dt>
<dd><p>Get all transactions pending confirmation</p>
</dd>
<dt><a href="#register">register()</a> ⇒ <code><a href="#Registration">Promise.&lt;Registration&gt;</a></code></dt>
<dd><p>Register a new hash in the BTC blockchain</p>
</dd>
<dt><a href="#getStatus">getStatus()</a> ⇒ <code><a href="#Registration">Promise.&lt;Registration&gt;</a></code></dt>
<dd><p>Get current status of a registration</p>
</dd>
<dt><a href="#updateStatus">updateStatus()</a> ⇒ <code><a href="#Registration">Promise.&lt;Registration&gt;</a></code></dt>
<dd><p>Update the current status of a registration</p>
</dd>
<dt><a href="#docproofs">docproofs()</a> ⇒ <code><a href="#Docproof">Promise.Array.&lt;Docproof&gt;</a></code></dt>
<dd><p>Get current docproofs of the registration</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Registration">Registration</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Docproof">Docproof</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="client"></a>

## client
Create an Axios Client with defaults

**Kind**: global constant  
<a name="request"></a>

## request() ⇒ <code>Promise</code>
Custom

**Kind**: global function  
**Returns**: <code>Promise</code> - a JS promise  

| Type | Description |
| --- | --- |
| <code>object</code> | an object containing the method and the URL to fetch |

<a name="getConfig"></a>

## getConfig() ⇒ <code>Promise.&lt;object&gt;</code>
Get current config

**Kind**: global function  
**Returns**: <code>Promise.&lt;object&gt;</code> - the server config  
<a name="getLatestConfirmed"></a>

## getLatestConfirmed() ⇒ [<code>Promise.Array.&lt;Registration&gt;</code>](#Registration)
Get all confirmed transactions

**Kind**: global function  
**Returns**: [<code>Promise.Array.&lt;Registration&gt;</code>](#Registration) - an array of confirmed  
<a name="getLatestUnconfirmed"></a>

## getLatestUnconfirmed() ⇒ [<code>Promise.Array.&lt;Registration&gt;</code>](#Registration)
Get all transactions pending confirmation

**Kind**: global function  
**Returns**: [<code>Promise.Array.&lt;Registration&gt;</code>](#Registration) - an array of confirmed  
<a name="register"></a>

## register() ⇒ [<code>Promise.&lt;Registration&gt;</code>](#Registration)
Register a new hash in the BTC blockchain

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | a valid Sha256 hash |

<a name="getStatus"></a>

## getStatus() ⇒ [<code>Promise.&lt;Registration&gt;</code>](#Registration)
Get current status of a registration

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | a valid Sha256 hash |

<a name="updateStatus"></a>

## updateStatus() ⇒ [<code>Promise.&lt;Registration&gt;</code>](#Registration)
Update the current status of a registration

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | a valid Sha256 hash |

<a name="docproofs"></a>

## docproofs() ⇒ [<code>Promise.Array.&lt;Docproof&gt;</code>](#Docproof)
Get current docproofs of the registration

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | a valid Sha256 hash |

<a name="Registration"></a>

## Registration : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| digest | <code>string</code> | the sha256 hash |
| payment_address | <code>string</code> | the BTC address |
| pending | <code>boolean</code> | if the paiment has been received |
| network | <code>string</code> | BTC netwotk 'testnet' or 'mainnet' |
| success | <code>boolean</code> | if the transaction has been recorded successfully |
| timestamp | <code>string</code> | the registration timestamp |
| tx | <code>string</code> | the BTC transaction id |
| txstamp | <code>string</code> | the BTC transaction timestamp |
| blockstamp | <code>string</code> | the BTC block timestamp |
| price | <code>string</code> | the price paid for the registration |

<a name="Docproof"></a>

## Docproof : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| blockchash | <code>string</code> | the sha256 hash |
| confirmations | <code>number</code> | number of times it has been confirmed in the BTC blockchain |
| txid | <code>string</code> | the BTC transaction id |
| txstamp | <code>string</code> | the BTC transaction timestamp |
| blockheight | <code>string</code> | position of the block in the BTC blockchain |
| blocktime | <code>number</code> | the BTC block timestamp |
| metadata | <code>string</code> | the OP_RETURN data containing the sha256 and the protocol |

