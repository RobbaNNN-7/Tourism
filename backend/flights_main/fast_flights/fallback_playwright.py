from typing import Any

from .primp import Client

CODE = """\
import asyncio
import sys
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("%s")
        locator = page.locator('.eQ35Ce')
        await locator.wait_for()
        body = await page.evaluate(
            \"\"\"() => {
                return document.querySelector('[role="main"]').innerHTML
            }\"\"\"
        )
        await browser.close()
    sys.stdout.write(body)

asyncio.run(main())
"""


import requests
import json

def fallback_playwright_fetch(params: dict) -> Any:
    url = "https://try.playwright.tech/service/control/run"
    
    # Using requests instead of primp Client
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
    }
    
    flight_url = "https://www.google.com/travel/flights?" + "&".join(f"{k}={v}" for k, v in params.items())
    
    payload = {
        "code": CODE % flight_url,
        "language": "python",
    }
    
    res = requests.post(url, json=payload, headers=headers, verify=False)
    
    assert res.status_code == 200, f"{res.status_code} Result: {res.text}"
    
    class DummyResponse:
        status_code = 200
        text = json.loads(res.text)["output"]
        text_markdown = text
        
    return DummyResponse()
