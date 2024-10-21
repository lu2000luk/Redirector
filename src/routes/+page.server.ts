import "dotenv/config";
import { kv } from "@vercel/kv";

export async function load({ url }) {

    // Remove the https / http part from the url
    // Force it to be lowercase
    // Remove its queries
    // Remove the www.
    // Remove port

    let address = url.toString().replace(/(https:\/\/|http:\/\/)/, "").toLowerCase().split("?")[0].replace("www.", "");
    if (address.includes(":")) {
        let temp_address = address.split(":")[0];
        // Add back the part after the port
        temp_address += address.split(":")[1].split("/")[0];
        address = temp_address;
    }

    let data = await kv.get<string>(address);
    if (!data) {
        // Try hostname
        address = url.hostname.toString()
        let data = await kv.get<string>(address);
        if (!data) {
            return {
                status: 404,
                error: "Redirect not found"
            }
        }
    }

    // Count the visit (Format is "url:analytics" = "count")
    let analytics = await kv.get<number>(address + ":analytics");
    if (!analytics) {
        analytics = 0;
    }
    await kv.set(address + ":analytics", analytics + 1);

    return {
        redirect: data
    }
}
