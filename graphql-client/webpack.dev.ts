import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(__dirname, "src");
const DIST_PATH = path.resolve(__dirname, "dist");

// Used to automatically add bundles to index.html
const htmlPlugin = new HtmlWebpackPlugin({
    template: SRC_PATH + "/index.html",
    filename: "./index.html"
});

// Used to fork a separate process to link .ts(x) files
const forkTsCheckerPlugin = new ForkTsCheckerWebpackPlugin();

const config: webpack.Configuration = {
    context: ROOT_PATH,
    mode: "development",
    entry: SRC_PATH + "/index.tsx",
    output: {
        path: DIST_PATH,
        filename: "[name].bundle.js",
        chunkFilename: "js/[name].[chunkhash].js"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        contentBase: DIST_PATH
    },
    resolve: {
        extensions: [".ts", ".tsx", ".scss", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { transpileOnly: true } // prevent ts-loader from scanning whole project. ForkTsCheckerPlugin will do that
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/images"
                        }
                    }
                ]
            },
            {
                test: /\.(ico)$/,
                use: "file-loader?name=assets/[name].[ext]"
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader"
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin, forkTsCheckerPlugin]
};

export default config;
